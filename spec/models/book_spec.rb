require 'rails_helper'

RSpec.describe Book, type: :model do
  # Can a new user be created? Or will an error occar?
  it "has to be real" do 
    # We expect that when we create a new user there will not be an error (to_not)
    expect{ Book.new }.to_not raise_error
  end 

  # Does the user have an email?
  it "has a title" do
    book = Book.new 
    book.title = "Dune"
    # Check to make sure that the email is a string
    expect(book.title).to be_a String
    # Check to make sure that the email what you expect it to be
    expect(book.title).to eq "Dune"
  end

  it "has a author" do
    book = Book.new 
    book.author = "Frank Herbert"
    # Check to make sure that the email is a string
    expect(book.author).to be_a String
    # Check to make sure that the email what you expect it to be
    expect(book.author).to eq "Frank Herbert"
  end


end
