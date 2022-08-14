class EmailThreadsController < ApplicationController
  
  
  
  def user_threads
    user = User.find(session[:user_id])
    emails = EmailThread.all
    byebug
    render json: emails , serializer: UserEmailThreadSerializer , status: :ok
  end

end
