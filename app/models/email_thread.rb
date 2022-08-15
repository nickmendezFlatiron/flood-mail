class EmailThread < ApplicationRecord
  has_many :messages , dependent: :destroy
  has_many :user_email_threads , dependent: :destroy
  has_many :users , through: :user_email_threads

  validates :subject , presence: true , length: {maximum: 50 , too_long: "50 characters is the maximum allowed"}
end
