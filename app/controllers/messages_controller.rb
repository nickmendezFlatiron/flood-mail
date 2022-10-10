class MessagesController < ApplicationController

  def create
    if current_user
      message = current_user.messages.create!(message_params)
      email_thread = EmailThread.find(params[:email_thread_id])
      email_thread.update(message_count: email_thread[:message_count] + 1)
      broadcast(params[:email_thread_id], message)
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


  private

  def message_params
    params.permit(:body, :email_thread_id )
  end

  def broadcast(thread_id, message)
    byebug
    recipient = User.find_by(id: params[:recipient_id])
    alert = Alert.create!({message_id: message.id , user_id: params[:recipient_id]})
    AlertChannel.broadcast_to(recipient , {alert: User.alerts})
  end
end
