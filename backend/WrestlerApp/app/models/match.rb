class Match < ActiveRecord::Base
	validates :user_id, :match_id, :times_seen, presence: true
	validates_inclusion_of :accepted, :in => [true, false]
	validates_inclusion_of :declined, :in => [true, false]

	belongs_to :user, class_name: 'User', foreign_key: :user_id
  	belongs_to :match, class_name: 'User', foreign_key: :match_id
end
