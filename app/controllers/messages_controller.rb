class MessagesController < ApplicationController

  def create
  end

  def destroy
    if current_user
      message = Message.find(params[:id])
      message.destroy
      head :no_content
    end
  end
end
