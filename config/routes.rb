Rails.application.routes.draw do
  
  resources :email_threads , only: [:show , :create ,:destroy]
  
  #Messages Controller
  resources :messages , only: [:create , :destroy]
  
  # Sessions Controller
  post "/login", to: "sessions#login"
  delete "logout" , to: "sessions#destroy"
  
  # Users Controller
  resources :users , only: [:destroy]
  post "/signup" , to: "users#create" 
  get "/authorize" , to: "users#show"
  
  resources :alerts , only: [:index, :show]
  # Email Threads Controller
  get "/user/threads", to: "email_threads#index"
  
  mount ActionCable.server, at: '/cable'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
