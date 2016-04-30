class Api::TestingController < ApplicationController
	def create
		@testing = Testing.new(testing_params)

		if @testing.save
			render :show
		else
			render json: @testing.errors.full_messages, status: 422
		end
	end

	def show
		@testing = Testing.find(params[:id])
		puts @testing
	end

	def index
		@testing = Testing.all
	end

	private

	def testing_params
		params.require(:testing).permit(
			:integer_data, :string_data
		)
	end
end
