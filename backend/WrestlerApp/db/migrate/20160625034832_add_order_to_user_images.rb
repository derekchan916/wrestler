class AddOrderToUserImages < ActiveRecord::Migration
	def change
		add_column :user_images, :order, :integer
		add_column :user_images, :is_profile_image, :boolean
	end
end
