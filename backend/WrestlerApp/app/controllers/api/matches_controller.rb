require 'byebug'

class Api::MatchesController < ApplicationController

	def show
		@users = User.find_by_sql([
			"SELECT users_sec.*
			FROM users AS users_prime
			JOIN users AS users_sec ON users_prime.id != users_sec.id
			LEFT OUTER JOIN matches ON users_prime.id = matches.user_id
			WHERE (matches.user_id IS NULL
			OR users_sec.id != matches.match_id)
			AND users_prime.id = ?
			ORDER BY RANDOM()
			LIMIT ?;",
			params[:id],
			params[:count]
		])

		render "api/user/index"
	end

	private
end
