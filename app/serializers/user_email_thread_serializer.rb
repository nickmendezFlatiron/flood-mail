class UserEmailThreadSerializer < ActiveModel::Serializer
  attributes :id , :subject , :emails

  has_many :messages

  def emails
    debug
  end 
end
