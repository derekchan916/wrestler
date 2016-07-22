class Api::MatchesController < ApplicationController

	def show
		@users = Users.all
		render "api/user/index"
	end

	private

	def user_params
		params.require(:match).permit(:user_id, :count)
	end
end
