class UserImage < ActiveRecord::Base
	validates :user_id, :url, presence: true

	belongs_to :user, class_name: 'User', foreign_key: :user_id
	# User.find(30).images.order(:order)
	# User.find(30).images.where(is_profile_image: true)
end
