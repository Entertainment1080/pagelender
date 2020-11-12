class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :rentals
  has_many :books
  has_many :book_rentals, through: :rentals, source: :book
  validates :first_name, :last_name, :address, :city, :state, :zip_code, presence: true
end
