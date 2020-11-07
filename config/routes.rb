Rails.application.routes.draw do
  resources :rentals
  resources :books
  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  # root to: 'home#index'

  devise_scope :user do
    authenticated  do
      root to: 'home#index'
    end

    unauthenticated do
      root to: 'devise/sessions#new', as: 'unauthenticated_root'
    end
  end
end
