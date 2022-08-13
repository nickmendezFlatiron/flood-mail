# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_08_13_215324) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "email_threads", force: :cascade do |t|
    t.string "subject"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "email_threads_users", id: false, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "email_thread_id", null: false
    t.index ["email_thread_id"], name: "index_email_threads_users_on_email_thread_id"
    t.index ["user_id"], name: "index_email_threads_users_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.text "body"
    t.bigint "email_thread_id", null: false
    t.bigint "user_id", null: false
    t.boolean "is_open", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email_thread_id"], name: "index_messages_on_email_thread_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "role", default: "free"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "contacts", array: true
  end

  add_foreign_key "messages", "email_threads"
  add_foreign_key "messages", "users"
end
