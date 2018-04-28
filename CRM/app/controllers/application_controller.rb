class ApplicationController < ActionController::API

	private 
   def valide_User

   	token= request.headers['Authorization']
   	 if token
   	 	session= Session.where(token: token).first

   	 	if !session
   	 	 render json: "{error: 'not valid session'}", status: 401
   	 	end
   	    else
   		 render json: "{error: 'not valid session'}", status: 401
   	end
   	
   end
end
