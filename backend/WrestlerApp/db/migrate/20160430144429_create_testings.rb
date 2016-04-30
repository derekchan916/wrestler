class CreateTestings < ActiveRecord::Migration
  def change
    create_table :testings do |t|
		t.string :string_data, null: false
		t.integer :integer_data, null: false

      t.timestamps null: false
    end
  end
end
