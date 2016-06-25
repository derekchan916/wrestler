class RemoveImagesFromUsers < ActiveRecord::Migration
	def change
		remove_column :users, :images, :string
		remove_column :users, :profile_image, :string
	end
end
