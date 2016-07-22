Rails.application.routes.draw do
	root to: 'static_pages#root'

	namespace :api, defaults: {format: :json} do
	  resources :user, only: [:index, :show, :create, :update, :destroy]
	  resources :matches, only: [:show]
    end

end
