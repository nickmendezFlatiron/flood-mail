Rails.application.routes.draw do
  resources :email_threads
  resources :messages

  # Sessions Controller
  post "/login", to: "sessions#login"
  delete 'logout' , to: "sessions#destroy"
  
  # Users Controller
  # resources :users , only: [:index , :show]
    post "/signup" , to: "users#create" 
    get "/authorize" , to: "users#show"
  
  
   get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
