class Book < ApplicationRecord
    has_many :rentals
    has_many :users, through: :rentals
    belongs_to :users
end
