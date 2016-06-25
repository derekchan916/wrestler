class User < ActiveRecord::Base
	validates :fname, :fb_id, :wins, :losses, presence: true
	validates :fb_id, uniqueness: true

	has_many :images, class_name: 'UserImage', foreign_key: :user_id
	has_one :profile_image, class_name: 'UserImage', foreign_key: :user_id
	before_validation :ensure_profile_image

	def ensure_profile_image
		self.profile_image ||= "missing.png"
	end
end
