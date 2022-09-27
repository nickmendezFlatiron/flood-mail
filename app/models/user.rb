class User < ApplicationRecord
  has_secure_password

  has_many :messages , dependent: :destroy
  has_many :user_email_threads 
  has_many :email_threads , through: :user_email_threads , dependent: :destroy

  validates :username , presence: true , uniqueness: { case_sensitive: false } , format: {with: /[a-zA-Z0-9_-]/ , message: "may include alphanumeric characters , dashes - , and underscores _"} , length: {maximum: 40 , too_long: "40 characters is the maximum allowed"}
  validates :password , confirmation: true , presence: true
  validates :password_confirmation , presence: true
  validates :email , format: {with: /[a-zA-Z0-9@.]|(^$)/ , message: "may only include alphanumeric characters or @"}
end
