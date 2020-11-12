class RentalsController < ApplicationController
    def index 
        rentals = Rental.all
        render json: rentals
    end

    def show
        rental = Rental.find(params[:id])
        render json: rental
    end
end
