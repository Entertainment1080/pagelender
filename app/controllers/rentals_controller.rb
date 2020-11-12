class RentalsController < ApplicationController
    def index
        rentals = Rental.all
        render json: rentals
    end

    def show
        rental = Rental.find(params[:id])
        render json: rental
    end

    def create
        rental = Rental.create(rental_params)
        if rental.valid?
            render json: rental
        else
            render json: rental.errors, status: 422
        end
    end

    private
    def rental_params
        params.require(:rental).permit(:book_id, :pick_up_date, :due_date, :user_id)
    end
end
