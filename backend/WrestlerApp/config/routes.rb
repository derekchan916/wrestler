Rails.application.routes.draw do
	root to: 'static_pages#root'

	namespace :api, defaults: {format: :json} do
      resources :testing, only: [:index, :show, :create]
	  resources :user, only: [:index, :show, :create, :update, :destroy]
    end
end
