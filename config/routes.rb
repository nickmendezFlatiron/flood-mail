Rails.application.routes.draw do
  resources :email_threads
  resources :messages

  # namespace :api do
    resources :users , only: [:index , :show]
    post "/signup" , to: "users#create" 
    post "/login", to: "sessions#login"
  # end
  
   get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
