class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :is_open
  has_one :email_thread
end
