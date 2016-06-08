class EditUsersTableProfileImage < ActiveRecord::Migration
  def change
	  remove_column :users, :profile_image, :string, null: false
	  add_column :users, :profile_image, :string
  end
end
