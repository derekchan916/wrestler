class CreateMatches < ActiveRecord::Migration
  def change
    create_table :matches do |t|
		t.integer :user_id, null: false
		t.integer :match_id, null: false
		t.integer :times_seen, null: false, :default => 0
		t.boolean :accepted, null: false, :default => false
		t.boolean :declined, null: false, :default => false

		t.timestamps null: false
    end
  end
end
