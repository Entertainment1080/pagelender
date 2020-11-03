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

  it "has a description" do
    book = Book.new
    book.description = "fight evil ice zombies"
    expect(book.description).to be_a String
    expect(book.description).to eq "fight evil ice zombies"
  end

  it "has a series" do
    book = Book.new
    book.series = "A Song of Ice and Fire"
    expect(book.series).to be_a String
    expect(book.series).to eq "A Song of Ice and Fire"
  end

  it "has pages" do
    book = Book.new
    book.pages = 800
    expect(book.pages).to be_a Integer
    expect(book.pages).to eq 800
  end

  # it "has pickup date" do
  #   book = Book.new
  #   book.pick_up_date = "2020-11-03 00:00:00.000000000 +0000"
  #   expect(book.pick_up_date).to be_a DateTime
  #   expect(book.pick_up_date).to eq "2020-11-03 00:00:00.000000000 +0000"
  # end

  #FOR due_date
  # it "has pickup date" do
  #   book = Book.new
  #   book.pick_up_date = "2020-11-03 00:00:00.000000000 +0000"
  #   expect(book.pick_up_date).to be_a DateTime
  #   expect(book.pick_up_date).to eq "2020-11-03 00:00:00.000000000 +0000"
  # end

it "has an img" do
    book = Book.new
    book.img_url = "https://i2.wp.com/www.tor.com/wp-content/uploads/2019/07/Dune-cover-1.jpg?type=vertical&ssl=1"
    expect(book.img_url).to be_a String
    expect(book.img_url).to eq "https://i2.wp.com/www.tor.com/wp-content/uploads/2019/07/Dune-cover-1.jpg?type=vertical&ssl=1"
  end

  # it "has a reservation" do
  #   book = Book.new
  #   book.reserved = TRUE
  #   expect(book.reserved).to be_a Boolean
  #   expect(book.reserved).to eq TRUE
  # end

  it "has a user id" do
    book = Book.new
    book.user_id = 1
    expect(book.user_id).to be_a Integer
    expect(book.user_id).to eq 1
  end

end
