class BooksController < ApplicationController
    def index 
        books = Book.all
        render json: books
    end

    def show
        book = Book.find(params[:id])
        render json: book
    end

    def create
        book = Book.create(book_params)
        if book.valid?
            render json: book 
        else 
            render json: book.errors, status: 422
        end
    end
    
    private
    def book_params
        params.require(:book).permit(:title, :author, :description, :pages, :user_id)
    end
end


