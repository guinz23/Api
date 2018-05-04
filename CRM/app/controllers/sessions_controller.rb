class SessionsController < ApplicationController
  before_action :set_session, only: [:destroy]
  require 'digest/md5'
  # POST /sessions
  def create
    username1 = session_params[:username]
    password1 = session_params[:password]
    password2 =Digest::MD5.hexdigest(password1)
    user= User.where(username: username1 , password: password2).first
     if user 
       token=Digest::MD5.hexdigest(password1)
       session=Session.new(token: token)
       session.user=user
       if session.save
      render json: session, status: :created
    else
      render json: session.errors, status: :unprocessable_entity
    end
  end
end


  # DELETE /sessions/1
  def destroy
    @session.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_session
      @session = Session.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def session_params
      params.require(:session).permit(:username, :password)
    end
end
