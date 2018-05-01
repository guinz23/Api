class CreateMeetings < ActiveRecord::Migration[5.1]
  def change
    create_table :meetings do |t|
      t.string :title_of_meeting
      t.datetime :date
      t.references :usuarios, foreign_key: true
      t.string :virtual
      t.references :clientes, foreign_key: true

      t.timestamps
    end
  end
end
