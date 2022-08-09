class ApplicationController < ActionController::API
  include ActionController::Cookies

  def hello_world
    session[:count] = session[:count].to_i + 1
    render json: { count: session[:count] }
  end
  
end
