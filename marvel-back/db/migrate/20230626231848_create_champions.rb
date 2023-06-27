class CreateChampions < ActiveRecord::Migration[7.0]
  def change
    create_table :champions do |t|
      t.string :name, limit: 20, null: false
      t.text :description, limit: 2000, null: false
      t.references :team, foreign_key: true
      t.string :image, null: false
      t.string :banner, null: false

      t.timestamps
    end

    add_index :champions, :name, unique: true
  end
end