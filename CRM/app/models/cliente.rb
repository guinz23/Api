class Cliente < ApplicationRecord
    has_many :contactos
    has_many :support_tickets
end
 