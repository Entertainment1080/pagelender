class Rental < ApplicationRecord
    belongs_to :user
    belongs_to :book
    validates :pick_up_date, :due_date, presence: true
end
