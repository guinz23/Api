Rails.application.routes.draw do
  resources :contactos
  resources :clientes
  resources :sessions
  resources :users
 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
