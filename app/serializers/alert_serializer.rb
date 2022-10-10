class AlertSerializer < ActiveModel::Serializer
  attributes :id, :is_read, :creator
  has_one :message

  def creator 
    message = Message.find(self.object.message_id)
    user = User.find(message[:user_id])
    user[:username]
  end
end
