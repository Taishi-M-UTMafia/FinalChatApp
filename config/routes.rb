Rails.application.routes.draw do
  root 'messages#index'
  devise_for :users
  get 'users/search'

  namespace :api, { format: 'json' } do
    get 'messages' => 'messages#index'
    post 'messages/post_message' => 'messages#post_message'

    get 'users/search' => 'users#search'
  end
end
