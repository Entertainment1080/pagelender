class Book < ApplicationRecord
    has_many :rentals
    has_many :rentees, through: :rentals, source: :user
    belongs_to :users
end
