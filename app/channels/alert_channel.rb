class AlertChannel < ApplicationCable::Channel
  def subscribed
    if current_user
      stream_from("Alerts-#{current_user.id}")
    end
  end

  def unsubscribed
    stop_all_streams
  end
end
