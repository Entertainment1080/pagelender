require 'rails_helper'

RSpec.describe User, type: :model do

  # Can a new user be created? Or will an error occar?
  it "has to be real" do 
    # We expect that when we create a new user there will not be an error (to_not)
    expect{ User.new }.to_not raise_error
  end 

  # Does the user have an email?
  it "has a email" do
    user = User.new 
    user.email = "test@gmail.com"
    # Check to make sure that the email is a string
    expect(user.email).to be_a String
    # Check to make sure that the email what you expect it to be
    expect(user.email).to eq "test@gmail.com"
  end

  it "has a password" do
    user = User.new
    user.encrypted_password = "test123"
    expect(user.encrypted_password).to be_a String
    expect(user.encrypted_password).to eq "test123"
  end






end
