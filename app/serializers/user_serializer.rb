class UserSerializer < ActiveModel::Serializer
  attributes :username, :email, :role , :contacts

  has_many :threads
end
