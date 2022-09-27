class UserSerializer < ActiveModel::Serializer
  attributes :username, :id, :email, :role , :contacts , :message_count , :email_thread_count

  def message_count
    self.object.messages.length
  end 

  def email_thread_count
    self.object.email_threads.count
  end 
end
