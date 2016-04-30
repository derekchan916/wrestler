class Testing < ActiveRecord::Base
	validates :string_data, :integer_data, presence: true
end
