class EmailThreadsController < ApplicationController
  
  def create
    if current_user

      thread = EmailThread.create!(subject: params[:subject])
      message = current_user.messages.create!({body: params[:message] , email_thread_id: thread[:id]})
      recipient = User.find_by!(username: params[:username])
      
      UserEmailThread.create!(email_thread_id: thread[:id] , user_id: session[:user_id])
      UserEmailThread.create!(email_thread_id: thread[:id] , user_id: recipient[:id])
      broadcast(recipient, message)    
      render json: thread , status: :created
    else 
      render json: {errors: ["Invalid Message , please try again."]} , status: :unprocessable_entity
    end 
  end 
  
  def index
    if current_user
      email_threads = current_user.email_threads.order(updated_at: :desc)    
      render json: email_threads , status: :ok
    end
  end

  def show 
    email = EmailThread.find(params[:id])
    if current_user.email_threads.include?(email)
      render json: email , serializer: UserEmailThreadSerializer ,  status: :ok
    else 
      render json: {errors: ["You do not have access to this thread"]} , status: :unauthorized
    end
  end

  def destroy
    thread = EmailThread.find(params[:id])
    thread.destroy
    head :no_content
  end

  private 
  
  def email_thread_params
    params.permit(:message , :username , :user_id , :subject)
  end

  def broadcast(recipient, message)
    alert = Alert.create!({message_id: message.id , user_id: recipient[:id]})
    AlertChannel.broadcast_to("Alerts-#{recipient[:id]}" , {alert: alert, creator: current_user.username, message: message})
  end
end
