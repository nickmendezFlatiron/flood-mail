class AlertsController < ApplicationController

  def index 
    if current_user
      alerts = current_user.alerts
      render json: alerts,  status: :ok
    else 
      render json: {errors: ["You do not have access to this feature"]} , status: :unauthorized
    end
  end

end
