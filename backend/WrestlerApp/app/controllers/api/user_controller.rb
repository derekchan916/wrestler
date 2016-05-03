class Api::UserController < ApplicationController
	def index
		@user = User.all
	end

	def show
		@user = User.find(params[:id])
	end

	def create
		@user = User.new(user_params)

		if @user.save
			render :show
		else
			print @user.errors.full_messages
			render json: @user.errors.full_messages, status: 422
		end
	end

	def update
	end

	def destroy
	end

	private

	def user_params
		params.require(:user).permit(:fname, :lname :fb_id, :images, :email)
	end
end
