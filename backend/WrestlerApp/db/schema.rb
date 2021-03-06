# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160721025657) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "fights", force: :cascade do |t|
    t.integer  "user_id",                 null: false
    t.integer  "opponent_id",             null: false
    t.integer  "fights",      default: 0, null: false
    t.integer  "win",         default: 0, null: false
    t.integer  "loss",        default: 0, null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  create_table "matches", force: :cascade do |t|
    t.integer  "user_id",                    null: false
    t.integer  "match_id",                   null: false
    t.integer  "times_seen", default: 0,     null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.boolean  "accepted",   default: false, null: false
    t.boolean  "declined",   default: false, null: false
  end

  create_table "user_images", force: :cascade do |t|
    t.integer  "user_id",                          null: false
    t.string   "url",                              null: false
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.integer  "order"
    t.boolean  "is_profile_image", default: false, null: false
  end

  add_index "user_images", ["user_id"], name: "index_user_images_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "fname",                       null: false
    t.string   "lname"
    t.string   "fb_id",                       null: false
    t.string   "email"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.integer  "wins",            default: 0
    t.integer  "losses",          default: 0
    t.string   "fb_access_token",             null: false
  end

  add_index "users", ["fb_id"], name: "index_users_on_fb_id", unique: true, using: :btree

end
