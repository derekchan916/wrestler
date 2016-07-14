class AddFbAccessTokenToUserTable < ActiveRecord::Migration
	def change
		add_column :users, :fb_access_token, :string, null: false
	end
end
