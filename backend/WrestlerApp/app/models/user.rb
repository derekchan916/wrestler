require 'byebug'

class User < ActiveRecord::Base
	validates :fname, :fb_id, :wins, :losses, :fb_access_token, presence: true
	validates :fb_id, uniqueness: true

	has_many :matches, class_name: 'Match', foreign_key: :user_id
	has_many :opponents, class_name: 'Fight', foreign_key: :user_id
	has_many :images, -> { order(:order) }, class_name: 'UserImage', foreign_key: :user_id
	has_one :profile_image, -> { where is_profile_image: true }, class_name: 'UserImage', foreign_key: :user_id
end
