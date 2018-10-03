Rails.application.routes.draw do
  devise_for :users
  root 'messages#index'

  namespace :api, { format: 'json' } do
    get 'messages' => 'messages#index'
    post 'messages/post_message' => 'messages#post_message'
  end
end
