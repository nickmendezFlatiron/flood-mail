class User < ApplicationRecord
  has_secure_password

  has_many :messages , dependent: :destroy
  has_many :user_email_threads 
  has_many :email_threads , through: :user_email_threads , dependent: :destroy

  validates :username , presence: true , uniqueness: true , format: {with: /[a-zA-Z0-9_-]/ , message: "may include alphanumeric characters , dashes - , and underscores _"} , length: {maximum: 30 , too_long: "30 characters is the maximum allowed"}
  validates :password , confirmation: true , presence: true
  validates :password_confirmation , presence: true
  validates :email , format: {with: /[a-zA-Z0-9@.]|(^$)/ , message: "may only include alphanumeric characters or @"}

  # THIS IS FOR CONFIRMING A CONTACT
  # validates :is_a_user 
  # def is_a_user
  #   contact = User.find_by(username: params[:contact])
  #   unless contact
  #     errors.add(:contact, "Sorry, we only allow specific email providers")
  #   end 
  # end
end
