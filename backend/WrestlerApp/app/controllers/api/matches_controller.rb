require 'byebug'

class Api::MatchesController < ApplicationController

	def show
		@users = User.find(params[:id])
					.matches.where(times_seen: 0)
					.limit(params[:count])
					.order("RANDOM()")
		render "api/user/index"
	end

	private
end
