class CreateUsers < ActiveRecord::Migration
	def change
		create_table :users do |t|
			t.string :fname, null: false
			t.string :lname
			t.string :fb_id, null: false
			t.string :images, array: true, :default => []
			t.string :email

			t.timestamps null: false
		end

		add_index :users, :fb_id, unique: true
	end
end
