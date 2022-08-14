class UserSerializer < ActiveModel::Serializer
  attributes :username, :email, :role , :contacts , :message_count , :email_thread_count

  # has_many :email_threads

  def message_count
    self.object.messages.length
  end 

  def email_thread_count
    self.object.email_threads.count
  end 
end
