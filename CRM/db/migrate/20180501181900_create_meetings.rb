class CreateMeetings < ActiveRecord::Migration[5.1]
  def change
    create_table :meetings do |t|
      t.string :title_of_meeting
      t.string :date
      t.references :users, foreign_key: true
      t.string :is_virtual

      t.timestamps
    end
  end
end
