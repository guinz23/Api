class Meeting < ApplicationRecord
  belongs_to :usuarios
  belongs_to :clientes
end
