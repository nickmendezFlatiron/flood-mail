class AlertChannel < ApplicationCable::Channel
  def subscribed
    if current_user
      stream_for("Alerts-#{current_user.id}")
    end
  end

  def received (data)
    AlertChannel.broadcast_to("Alerts-#{current_user.id}", data)
  end


  def unsubscribed
    stop_all_streams
  end
end
