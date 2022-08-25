puts "Seeding>>>>>"

user1 = User.create(username: "test1" , email: "test@test.com" , role: "free" , password: 'Test' , password_confirmation: "Test", contacts: ["admin"])
user2 = User.create(username: "test2" , email: "test@test.com" , role: "free" , password: 'Test' , password_confirmation: "Test", contacts: ["admin"])
user3 = User.create(username: "test3" , email: "test2@test.com" , role: "free" , password: 'Test' , password_confirmation: "Test", contacts: ["admin"])
user4 = User.create(username: "test4" , email: "test2@test.com" , role: "free" , password: 'Test' , password_confirmation: "Test", contacts: ["admin"])




20.times do |i|
  EmailThread.create(subject: "This is a test")
end

20.times do |i|
  UserEmailThread.create(user_id: 1 , email_thread_id: i + 1 )
  UserEmailThread.create(user_id: 2 , email_thread_id: i + 1)
end 

20.times do |i|

  Message.create(body: Faker::Marketing.buzzwords , email_thread_id: i + 1 , user_id: 1 , is_open: true )
  Message.create(body: Faker::Marketing.buzzwords , email_thread_id: i + 1 , user_id: 2 , is_open: true )
  Message.create(body: Faker::Marketing.buzzwords , email_thread_id: i + 1 , user_id: 1 , is_open: true )
  Message.create(body: Faker::Marketing.buzzwords , email_thread_id: i + 1 , user_id: 2 , is_open: true )
  Message.create(body: Faker::Marketing.buzzwords , email_thread_id: i + 1 , user_id: 1 , is_open: true )
  Message.create(body: Faker::Marketing.buzzwords , email_thread_id: i + 1 , user_id: 2 , is_open: true )
  Message.create(body: Faker::Marketing.buzzwords , email_thread_id: i + 1 , user_id: 1 , is_open: true )
  Message.create(body: Faker::Marketing.buzzwords , email_thread_id: i + 1 , user_id: 2 , is_open: false )
end

20.times do |i|

  n = i + 21
  EmailThread.create(subject: "This is a Test also" )
  UserEmailThread.create(user_id: 3 , email_thread_id: n)
  UserEmailThread.create(user_id: 4 , email_thread_id: n)
  Message.create(body: Faker::Marketing.buzzwords , email_thread_id: n , user_id: 3 , is_open: true )
  Message.create(body: Faker::Marketing.buzzwords , email_thread_id: n , user_id: 4 , is_open: true )
  Message.create(body: Faker::Marketing.buzzwords , email_thread_id: n , user_id: 3 , is_open: true )
  Message.create(body: Faker::Marketing.buzzwords , email_thread_id: n , user_id: 4 , is_open: true )
  Message.create(body: Faker::Marketing.buzzwords , email_thread_id: n , user_id: 3 , is_open: true )
  Message.create(body: Faker::Marketing.buzzwords , email_thread_id: n , user_id: 4 , is_open: true )
  Message.create(body: Faker::Marketing.buzzwords , email_thread_id: n , user_id: 3 , is_open: true )
  Message.create(body: Faker::Marketing.buzzwords , email_thread_id: n , user_id: 4 , is_open: false )
end








# create_table "email_threads", force: :cascade do |t|
#   t.string "subject"
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end



# create_table "messages", force: :cascade do |t|
#   t.text "body"
#   t.bigint "email_thread_id", null: false
#   t.bigint "user_id", null: false
#   t.boolean "is_open", default: false
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
#   t.index ["email_thread_id"], name: "index_messages_on_email_thread_id"
#   t.index ["user_id"], name: "index_messages_on_user_id"
# end

# 20.times do 

#   username = Faker::Twitter.unique.screen_name
#   email = Faker::Internet.email
#   User.create
# end

puts ">>>>>Seeded."