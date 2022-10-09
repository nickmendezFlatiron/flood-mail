class AlertChannel < ApplicationCable::Channel
  def subscribed
    stream_from "alert_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
