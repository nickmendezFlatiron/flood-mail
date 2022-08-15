class EmailThreadsController < ApplicationController
  
  def create
    if current_user
      thread = EmailThread.create!(subject: params[:subject])
    
      message = current_user.messages.create!({body: params[:message] , email_thread_id: thread[:id]})
      recipient = User.find_by!(username: params[:username])
      
      recipient.email_threads.push(thread)
      render json: thread , status: :created
    else 
      render json: {errors: ["Invalid Message , please try again."]} , status: :unprocessable_entity

    end 
  end 
  
  def index
    if current_user
      email_threads = current_user.email_threads
      render json: email_threads , status: :ok
    end
  end

  def email_thread_params
    params.permit(:message , :username , :user_id , :subject)
  end
end
