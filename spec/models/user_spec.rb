require 'rails_helper'

RSpec.describe User, type: :model do

  # Can a new user be created? Or will an error occar?
  it "first name presence" do
    user = User.new(email: "test3@testing.com", password: "test123", last_name: "Baggins", address: "108 Shire Lane", city: "The Shire", state: "Middle Earth", zip_code: 12345)
    expect(user).to_not be_valid
  end

  # Does the user have an email?
  it "last name presence" do
    user = User.new(email: "test3@testing.com", password: "test123", first_name: "Bilbo", address: "108 Shire Lane", city: "The Shire", state: "Middle Earth", zip_code: 12345)
    expect(user).to_not be_valid
  end

  it "email presence" do
    user = User.new(password: "test123", first_name: "Bilbo", last_name: "Baggins", address: "108 Shire Lane", city: "The Shire", state: "Middle Earth", zip_code: 12345)
    expect(user).to_not be_valid
  end

  it "password presence" do
    user = User.new(email: "test3@testing.com", first_name: "Bilbo", last_name: "Baggins", address: "108 Shire Lane", city: "The Shire", state: "Middle Earth", zip_code: 12345)
    expect(user).to_not be_valid
  end

  it "address presence" do
    user = User.new(email: "test3@testing.com", password: "test123", first_name: "Bilbo", last_name: "Baggins", city: "The Shire", state: "Middle Earth", zip_code: 12345)
    expect(user).to_not be_valid
  end

  it "city presence" do
    user = User.new(email: "test3@testing.com", password: "test123", first_name: "Bilbo", last_name: "Baggins", address: "108 Shire Lane", state: "Middle Earth", zip_code: 12345)
    expect(user).to_not be_valid
  end

  it "state presence" do
    user = User.new(email: "test3@testing.com", password: "test123", first_name: "Bilbo", last_name: "Baggins", address: "108 Shire Lane", city: "The Shire", zip_code: 12345)
    expect(user).to_not be_valid
  end

  it "zip_code presence" do
    user = User.new(email: "test3@testing.com", password: "test123", first_name: "Bilbo", last_name: "Baggins", address: "108 Shire Lane", city: "The Shire", state: "Middle Earth")
    expect(user).to_not be_valid
  end

  it "user is valid" do
    user = User.new(email: "test3@testing.com", password: "test123", first_name: "Bilbo", last_name: "Baggins", address: "108 Shire Lane", city: "The Shire", state: "Middle Earth", zip_code: 12345)
    expect(user).to be_valid
  end

end
