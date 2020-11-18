require 'rails_helper'

RSpec.describe Book, type: :model do
  # Can a new user be created? Or will an error occur?

  user = User.create

  it "user_id presence" do
    book = Book.new(title: "Dune", author: "Frank Herbert", description: "Lots of sand", pages: 400)
    expect(book).to_not be_valid
  end

  it "title presence" do
    book = user.books.new(user_id: 1, author: "Frank Herbert", description: "Lots of sand", pages: 400)
    expect(book).to_not be_valid
  end

  it "author presence" do
    book = user.books.new(user_id: 1, title: "Dune", description: "Lots of sand", pages: 400)
    expect(book).to_not be_valid
  end

  it "description presence" do
    book = user.books.new(user_id: 1, title: "Dune", author: "Frank Herbert", pages: 400)
    expect(book).to_not be_valid
  end

  it "description presence" do
    book = user.books.new(user_id: 1, title: "Dune", author: "Frank Herbert", pages: 400)
    expect(book).to_not be_valid
  end

  it "pages presence" do
    book = user.books.new(user_id: 1, title: "Dune", author: "Frank Herbert", description: "Lots of sand")
    expect(book).to_not be_valid
  end

  it "book is valid" do
    book = user.books.new(title: "Dune", author: "Frank Herbert", description: "Lots of sand", pages: 200)
    expect(book).to be_valid
  end
end
