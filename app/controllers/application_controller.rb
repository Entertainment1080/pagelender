class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    before_action :configure_permitted_parameters, if: :devise_controller?

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [
            :first_name, 
            :last_name, 
            :email, 
            :password, 
            :address, 
            :city, 
            :state, 
            :zip_code
        ])
    end
end
