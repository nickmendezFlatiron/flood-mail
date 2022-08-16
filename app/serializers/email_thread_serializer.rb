class EmailThreadSerializer < ActiveModel::Serializer
  attributes :id, :subject ,:message_count , :latest_message , :updated_at

  # has_many :messages
  has_many :users

  def latest_message
    if self.object.messages.last
      self.object.messages.last.body.truncate(33)
    end
  end
end
