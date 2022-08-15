class UserEmailThreadSerializer < ActiveModel::Serializer
  attributes :id , :subject  

  has_many :messages
  has_many :users

  # def emails
  #   byebug
  # end 
end
