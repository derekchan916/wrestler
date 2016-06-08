class User < ActiveRecord::Base
	validates :fname, :fb_id, presence: true
	validates :fb_id, uniqueness: true

	before_validation :ensure_profile_image

	def ensure_profile_image
		self.profile_image ||= "missing.png"
	end
end
