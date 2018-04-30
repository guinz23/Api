class CreateContactos < ActiveRecord::Migration[5.1]
  def change
    create_table :contactos do |t|
      t.references :clientes, foreign_key: true
      t.string :name
      t.string :lastname
      t.string :email
      t.string :phone_number
      t.string :job

      t.timestamps
    end
  end
end
