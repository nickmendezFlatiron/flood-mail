class EmailThreadsController < ApplicationController
  
  def create
    if current_user

      thread = EmailThread.create!(subject: params[:subject])
      message = current_user.messages.create!({body: params[:message] , email_thread_id: thread[:id]})
      recipient = User.find_by!(username: params[:username])
      
      UserEmailThread.create!(email_thread_id: thread[:id] , user_id: session[:user_id])
      UserEmailThread.create!(email_thread_id: thread[:id] , user_id: recipient[:id])
            
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
    if current_user
      thread = EmailThread.find(params[:id])
      render json: thread , serializer: UserEmailThreadSerializer ,  status: :ok
    end
  end

  def destroy
      thread = EmailThread.find(params[:id])
      thread.destroy
      head :no_content

  end

  def email_thread_params
    params.permit(:message , :username , :user_id , :subject)
  end
end
