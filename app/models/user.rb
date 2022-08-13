class User < ApplicationRecord
  has_secure_password

  validates :username , presence: true
  validates :password , confirmation: true
  validates :password_confirmation , presence: true
end
