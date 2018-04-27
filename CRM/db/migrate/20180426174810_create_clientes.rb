class CreateClientes < ActiveRecord::Migration[5.1]
  def change
    create_table :clientes do |t|
      t.string :name
      t.string :lastnanme
      t.string :phone
      t.string :email

      t.timestamps
    end
  end
end
