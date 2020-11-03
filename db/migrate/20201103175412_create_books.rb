class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.text :description
      t.string :series
      t.integer :pages
      t.datetime :pick_up_date
      t.datetime :due_date
      t.string :img_url
      t.boolean :reserved
      t.integer :user_id

      t.timestamps
    end
  end
end
