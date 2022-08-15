class EmailThreadsController < ApplicationController
  
  def create
    if current_user
      thread = EmailThread.create!(subject: params[:subject])
    
      message = current_user.messages.create!({body: params[:message] , email_thread_id: thread[:id]})
      recipient = User.find_by!(username: params[:username])
      
      current_user.email_threads << thread
      recipient.email_threads.push(thread)
      
      current_user.save
      recipient.save
      render json: {thread: thread , message: message} , status: :created
    else 
      render json: {errors: ["Invalid Message , please try again."]} , status: :unprocessable_entity

    end 
  end 
  
  def index
    if current_user
      email_threads = current_user.email_threads.order(id: :desc)
      render json: email_threads , status: :ok
    end
  end

  def email_thread_params
    params.permit(:message , :username , :user_id , :subject)
  end
end
