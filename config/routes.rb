Rails.application.routes.draw do
  resources :email_threads , only: [:show]
  # resources :messages

  # Sessions Controller
  post "/login", to: "sessions#login"
  delete "logout" , to: "sessions#destroy"
  
  # Users Controller
  # resources :users , only: [:index , :show]
    post "/signup" , to: "users#create" 
    get "/authorize" , to: "users#show"
  
  # Email Threads Controller
    get "/user/threads", to: "email_threads#index"
    
  
   get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
