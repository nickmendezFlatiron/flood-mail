class UsersController < ApplicationController
  skip_before_action :authorize_user , only: [:create]

  def create
    user = User.create!(user_params)
    session[:user_id] = user[:id]
    render json: user , status: :created
  end

  def show
    if current_user
      render json: current_user , status: :created
    else 
      render json: [error: "Not Authorized , please login."] , status: :unauthorized
    end 
  end

  def destroy

    if current_user 
      current_user.email_threads.each {|e| e.destroy}
      current_user.destroy
      session.delete :current_user
      head :no_content
    end
  end
  
  private

  def user_params 
    params.permit(:username , :email ,:password , :password_confirmation)
  end 
end
