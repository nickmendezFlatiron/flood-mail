class EmailThreadSerializer < ActiveModel::Serializer
  attributes :id, :subject ,:created_at , :latest_message

  has_many :users
  has_many :messages

  def latest_message
    self.object.messages.last.body.truncate(33)
  end
end
