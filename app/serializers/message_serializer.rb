class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :is_open , :created_at , :creator

  belongs_to :user
  has_one :email_thread

  def creator
   user = User.find(self.object.user_id)
   user.username
  end
end
