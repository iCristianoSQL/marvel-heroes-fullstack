class CreateChampionsSkills < ActiveRecord::Migration[7.0]
  def change
    create_table :champions_skills do |t|
      t.references :champion, null: false, foreign_key: true
      t.references :skill, null: false, foreign_key: true

      t.timestamps
    end
  end
end