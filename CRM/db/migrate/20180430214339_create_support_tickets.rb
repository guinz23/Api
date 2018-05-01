class CreateSupportTickets < ActiveRecord::Migration[5.1]
  def change
    create_table :support_tickets do |t|
      t.string :title_of_the_problem
      t.string :details_of_the_problem
      t.string :who_reports
      t.references :clientes, foreign_key: true
      t.string :state

      t.timestamps
    end
  end
end
