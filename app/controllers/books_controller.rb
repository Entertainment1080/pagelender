class BooksController < ApplicationController
    def index 
        books = Book.all 
        render json: books.to_json(include: :rentals)
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

    def update 
        book = current_user.books.find(params[:id])
        book.update(book_params)
        if book.valid?
            render json: book 
        else 
            render json: book.errors, status: 422
        end
    end

    def destroy
        book = current_user.books.find(params[:id])
        if book.destroy
            render json: book 
        else 
            render json: book.errors, status: 422
        end
    end
    
    private
    def book_params
        params.require(:book).permit(:title, :author, :description, :pages, :series, :img_url, :user_id)
    end
end


