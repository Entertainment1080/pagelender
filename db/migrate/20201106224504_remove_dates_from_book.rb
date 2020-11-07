class RemoveDatesFromBook < ActiveRecord::Migration[6.0]
  def change
    remove_column :books, :pick_up_date, :datetime
    remove_column :books, :due_date, :datetime
  end
end
