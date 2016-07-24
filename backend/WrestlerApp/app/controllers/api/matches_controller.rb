require 'byebug'

class Api::MatchesController < ApplicationController

	def show
		query = "SELECT users_sec.*
			FROM users AS users_prime
			JOIN users AS users_sec ON users_prime.id != users_sec.id
			LEFT OUTER JOIN matches ON users_prime.id = matches.user_id
			WHERE (matches.user_id IS NULL
			OR users_sec.id != matches.match_id)
			AND users_prime.id = 50
			ORDER BY RANDOM()
			LIMIT 5;"

		@users = User.all
		# @users = ActiveRecord::Base.connection.execute(query)
		render "api/user/index"
	end

	private
end
