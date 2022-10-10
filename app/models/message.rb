class Message < ApplicationRecord
  belongs_to :email_thread
  belongs_to :user
  
  validates :body , presence: true 
  validates :email_thread_id , numericality: true , presence: true
  validates :user_id , numericality: true , presence: true

  
end
