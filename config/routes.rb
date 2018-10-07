Rails.application.routes.draw do
  root 'messages#index'
  devise_for :users
  get 'users/search'

  namespace :api, { format: 'json' } do
    post 'messages/post_message' => 'messages#post_message'

    get 'users/search' => 'users#search'
    get 'users/fetch_current_user' => 'users#fetch_current_user'
    get 'users/fetch_friends_data_list' => 'users#fetch_friends_data_list'

    post 'friendships' => 'friendships#create'
    delete 'friendships' => 'friendships#destroy'
    get 'friendships/update_last_access' => 'friendships#update_last_access'
  end
end
