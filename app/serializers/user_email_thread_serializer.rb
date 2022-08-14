class UserEmailThreadSerializer < ActiveModel::Serializer
  attributes :id , :subject  

  # has_many :messages

  # def emails
  #   byebug
  # end 
end
