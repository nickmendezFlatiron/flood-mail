class UsersController < ApplicationController
  skip_before_action :authorize_user , only: [:create]

  def create
    user = User.create!(user_params)
    render json: user , status: :created
    session[:user_id] = user.id
  end

  def show
    if current_user
      render json: current_user , status: :created
    else 
      render json: [error: "Not Authorized , please login."] , status: :unauthorized
    end 
  end

  def destroy
    if current_user && current_user.id == params[:user_id].to_i
      current_user.destroy
      head :no_content
    end
  end
  
  private

  def user_params 
    params.permit(:username , :email ,:password , :password_confirmation)
  end 
end
