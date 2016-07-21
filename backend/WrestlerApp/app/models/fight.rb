class Fight < ActiveRecord::Base
	validates :user_id, :opponent_id, :win, :loss, presence: true

	belongs_to :user, class_name: 'User', foreign_key: :user_id
  	belongs_to :opponent, class_name: 'User', foreign_key: :opponent_id
end
