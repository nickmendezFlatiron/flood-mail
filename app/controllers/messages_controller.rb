class MessagesController < ApplicationController

  def create
    if current_user
      message = current_user.messages.create!(message_params)
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
end
