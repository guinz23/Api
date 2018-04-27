class CreateClientes < ActiveRecord::Migration[5.1]
  def change
    create_table :clientes do |t|
      t.string :name
      t.string :legal_document
      t.string :web_page
      t.integer :phone_number
      t.string :section

      t.timestamps
    end
  end
end
