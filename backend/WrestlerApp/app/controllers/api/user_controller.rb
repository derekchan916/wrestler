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
			render json: @user.errors.full_messages, status: 422
		end
	end

	def update
	end

	def destroy
	end

	private

	def user_params
		params.require(:user).permit(:name, :facebook_id, :images, :email)
	end
end
