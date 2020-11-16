class ReviewsController < ApplicationController

    def get
        puts params
        response = HTTParty.get("https://www.goodreads.com/book/title.json?key=C6ADuioOC7UwvXyJm2pGQ&title=#{params[:title]}&author=#{params[:author]}")
        render json: response.body
    end

end


