class EditUserTableToAddFirstNameLastName < ActiveRecord::Migration
	def change
  	  remove_column :users, :name, :string, null: false
	  remove_column :users, :facebook_id, :string, null: false
	  remove_column :users, :images, :string, array: true

  	  add_column :users, :fname, :string, null: false
	  add_column :users, :lname, :string
	  add_column :users, :fb_id, :string, null: false
	  add_column :users, :images, :string, array: true, :default => []
    end
end
