class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :is_open , :user_id 
  has_one :email_thread
end
