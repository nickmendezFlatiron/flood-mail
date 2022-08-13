class EmailThread < ApplicationRecord
  has_many :messages
  has_and_belongs_to_many :users 

  validates :subject , presence: true , length: {maximum: 50 , too_long: "50 characters is the maximum allowed"}
end
