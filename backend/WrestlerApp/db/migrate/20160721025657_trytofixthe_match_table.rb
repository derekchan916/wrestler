class TrytofixtheMatchTable < ActiveRecord::Migration
  def change
	  remove_column :matches, :accepted, :boolean
	  remove_column :matches, :declined, :boolean
	  add_column :matches, :accepted, :boolean, default: false, null: false
	  add_column :matches, :declined, :boolean, default: false, null: false
  end
end
