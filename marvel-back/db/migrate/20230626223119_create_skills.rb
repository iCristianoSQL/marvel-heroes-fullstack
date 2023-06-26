class CreateSkills < ActiveRecord::Migration[7.0]
  def change
    create_table :skills do |t|
      t.string :name, null: false
      t.text :description, limit: 255, null: false
      t.string :color, null: false

      t.timestamps
    end

    add_index :skills, :name, unique: true
  end
end