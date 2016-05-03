class User < ActiveRecord::Base
	validates :fname, :fb_id, presence: true
	validates :fb_id, uniqueness: true
end
