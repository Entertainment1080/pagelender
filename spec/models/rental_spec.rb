require 'rails_helper'

RSpec.describe Rental, type: :model do

  user = User.new(first_name: "Bilbo", last_name: "Baggins", email: "test@testing.com")

  it "user_id presence" do
    rental = Rental.new(book_id: 1, pick_up_date: "2020-11-09T21:10:15.760Z", due_date: "2020-12-10T21:10:15.760Z")
    expect(rental).to_not be_valid
  end

  it "book_id presence" do
    rental = user.rentals.new(pick_up_date: "2020-11-09T21:10:15.760Z", due_date: "2020-12-10T21:10:15.760Z")
    expect(rental).to_not be_valid
  end

  it "pick_up_date presence" do
    rental = user.rentals.new(book_id: 1, due_date: "2020-12-10T21:10:15.760Z")
    expect(rental).to_not be_valid
  end

  it "due_date presence" do
    rental = user.rentals.new(book_id: 1, pick_up_date: "2020-12-10T21:10:15.760Z")
    expect(rental).to_not be_valid
  end

  test_book = user.books.new(id: 1, user_id: 1, title: "Dune", author: "Frank Herbert", description: "Lots of sand", pages: 300, series: "Dune")

  it "rental is valid" do
    book = user.books.new(title: "Dune", author: "Frank Herbert", description: "Lots of sand", pages: 200)
    rental = book.rentals.new( pick_up_date: "2020-11-09T21:10:15.760Z", due_date: "2020-12-10T21:10:15.760Z")
    expect(rental).to be_valid
  end

end
