class Message < ApplicationRecord
  belongs_to :email_thread
  belongs_to :user

  validates :body , presence: true 
  validates :email_thread_id , numericality: true , presence: true
  validates :user_id , numericality: true , presence: true
  # create_table "messages", force: :cascade do |t|
  #   t.text "body"
  #   t.bigint "email_thread_id", null: false
  #   t.bigint "user_id", null: false
  #   t.boolean "is_open", default: false
  #   t.datetime "created_at", null: false
  #   t.datetime "updated_at", null: false
  #   t.index ["email_thread_id"], name: "index_messages_on_email_thread_id"
  #   t.index ["user_id"], name: "index_messages_on_user_id"
  
end
