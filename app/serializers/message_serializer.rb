class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :is_open 

  belongs_to :user
  has_one :email_thread
end
