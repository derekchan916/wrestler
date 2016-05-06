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
		@user = User.find(params[:id])
		if @user
			render "api/user/show"
		else
			@user = User.new(user_params)

			if @user.save
				render "api/user/show"
			else
				@errors = @user.errors.full_messages
				render "api/shared/error", status: 422
			end
		end
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
