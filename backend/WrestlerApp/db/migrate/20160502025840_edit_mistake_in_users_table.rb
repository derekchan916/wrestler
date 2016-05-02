class EditMistakeInUsersTable < ActiveRecord::Migration
	def change
		remove_column :users, :moves, :string

		add_column :users, :images, :string, array: true
	end
end
