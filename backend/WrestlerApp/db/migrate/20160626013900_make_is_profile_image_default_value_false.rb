class MakeIsProfileImageDefaultValueFalse < ActiveRecord::Migration
	def change
		remove_column :user_images, :is_profile_image, :boolean
		add_column :user_images, :is_profile_image, :boolean, default: false, null: false
	end
end
