class EmailThreadsController < ApplicationController
  
  
  
  def index
    if current_user
      email_threads = current_user.email_threads
      # byebug
      render json: email_threads , status: :ok
    end
  end

end
