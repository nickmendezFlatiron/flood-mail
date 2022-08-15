class EmailThreadSerializer < ActiveModel::Serializer
  attributes :id, :subject ,:created_at, :latest_message

  # has_many :messages
  has_many :users

  def latest_message
    self.object.messages.last.body.truncate(33)
  end
end
