class UserEmailThreadSerializer < ActiveModel::Serializer
  attributes :id , :subject  

  belongs_to :user
  belongs_to :email_thread

  # def emails
  #   byebug
  # end 
end
