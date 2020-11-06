class CreateRentals < ActiveRecord::Migration[6.0]
  def change
    create_table :rentals do |t|
      t.integer :book_id
      t.integer :user_id
      t.datetime :pick_up_date
      t.datetime :due_date

      t.timestamps
    end
  end
end
