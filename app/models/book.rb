class Book < ApplicationRecord
    has_many :rentals
    belongs_to :user
    has_many :rentees, through: :rentals, source: :user
    validates :title, :author, :description, :pages, presence: true
end
