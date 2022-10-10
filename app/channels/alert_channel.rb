class AlertChannel < ApplicationCable::Channel
  def subscribed
    if current_user
      stream_from("Alerts-#{current_user.id}")
    end
  end

  # def received (data)
  #   ActionCable.server.broadcast("chat_#{params[:room]}", data)
  # end


  def unsubscribed
    stop_all_streams
  end
end
