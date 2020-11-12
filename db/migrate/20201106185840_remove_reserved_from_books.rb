class RemoveReservedFromBooks < ActiveRecord::Migration[6.0]
  def change
    remove_column :books, :reserved, :boolean
  end
end
