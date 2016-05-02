class User < ActiveRecord::Base
	validates :name, :facebook_id, :images, presence: true
	validates :facebook_id, uniqueness: true
end
