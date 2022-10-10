module ApplicationCable
  class Channel < ActionCable::Channel::Base
    
    private
      def find_verified_user
        if verified_user = verified_user = User.find_by(id: cookies.encrypted['_session_id']['user_id'])
          verified_user
        else
          reject_unauthorized_connection
        end
      end
  end
end
