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
		unless @user
			@user = User.new(user_params)
			unless @user.save
				@errors = @user.errors.full_messages
				render "api/shared/error", status: 422
				return
			end
			@new_user = true
		end
		render "api/user/show"
	end

	def update
	end

	def destroy
	end

	private

	def user_params
		params.require(:user).permit(:fname, :lname, :fb_id, :images, :email)
	end
end
