class CreateFights < ActiveRecord::Migration
  def change
    create_table :fights do |t|
		t.integer :user_id, null: false
		t.integer :opponent_id, null: false
		t.integer :fights, null: false, :default => 0
		t.integer :win, null: false, :default => 0
		t.integer :loss, null: false, :default => 0

		t.timestamps null: false
    end
  end
end
