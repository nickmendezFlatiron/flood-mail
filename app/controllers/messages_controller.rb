class MessagesController < ApplicationController

  def create
    if current_user
      message = current_user.messages.create!(message_params)
      email_thread = EmailThread.find(params[:email_thread_id])
      email_thread.update(message_count: email_thread[:message_count] + 1)
      render json: message , status: :created
    end
  end

  def destroy
    if current_user
      message = Message.find(params[:id])
      message.destroy
      head :no_content
    end
  end

  def sorted_messages
    # retrieve the list of all messages for a user , sorted by ASC
    if current_user
      messages = Message.order(body: :asc).pluck("body")
      render json: messages ,status: :ok
    end
    
  end 


  private

  def message_params
    params.permit(:body, :email_thread_id )
  end
end
