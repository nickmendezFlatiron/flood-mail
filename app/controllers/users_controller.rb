class UsersController < ApplicationController
  

  def create
    user = User.create!(user_params)
    render json: user , status: :created
    session[:user_id] = user.id
  end

  def index
    users = User.all
    render json: users , status: :ok
  end 
  
  private

  def user_params 
    params.permit(:username , :email ,:password , :password_confirmation)
  end 
end
