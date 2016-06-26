require 'byebug'

class Api::UserController < ApplicationController
	def index
		@user = User.all
		render "api/user/index"
	end

	def show
		@user = User.find(params[:id])
		render "api/user/show"
	end

	def create
		@user = User.find_by(fb_id: user_params[:fb_id])

		if !@user
			@user = User.new(user_params)

			unless @user.save
				@errors = @user.errors.full_messages
				render "api/shared/error", status: 422
				return
			end

			params["profile_image"] ||= "missing.png"
			UserImage.create(
				"user_id" => @user.id,
				"url" => params["profile_image"],
				"order" => 1,
				"is_profile_image"=>true
			)

			@new_user = true
		else

			unless @user.update_attributes(user_params)
				render json: @user.errors.full_messages, status: :unprocessable_entity
			end
		end
		render "api/user/show"
	end

	def update
		@user = User.find_by(fb_id: user_params[:fb_id])

		if @user.update_attributes(user_params)
			render "api/user/show"
		else
			render json: @user.errors.full_messages, status: :unprocessable_entity
		end
	end

	def destroy
	end

	private

	def user_params
		params.require(:user).permit(:fname, :lname, :fb_id, :email, :profile_image, :wins, :losses)
	end
end
