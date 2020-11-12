require 'rails_helper'

RSpec.describe Rental, type: :model do

  user = User.create

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

  test_book = Book.create
  it "rental is valid" do
    rental = user.rentals.new(book_id: test_book.id, pick_up_date: "2020-11-09T21:10:15.760Z", due_date: "2020-12-10T21:10:15.760Z")
    expect(rental).to be_valid
  end

end
