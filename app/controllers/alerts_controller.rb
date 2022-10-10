class AlertsController < ApplicationController

  def index 
    if current_user
      alerts = current_user.alerts
      render json: alerts,  status: :ok
    else 
      render json: {errors: ["You do not have access to this feature"]} , status: :unauthorized
    end
  end

  def show
    if params[:id]
      alert = Alert.find_by!(id: params[:id])
      message = Message.find_by!(id: alert[:message_id])
      alert.destroy
      render json: {email_thread_id: message[:email_thread_id]} , status: :ok
    else
      render json: {errors: ["Delete failed"]},  status: :unauthorized
    end
  end

end
