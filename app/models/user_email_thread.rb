class UserEmailThread < ApplicationRecord
  belongs_to :email_thread 
  belongs_to :user
end
