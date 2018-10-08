Rails.application.routes.draw do
  root 'messages#index'
  devise_for :users
  get 'users/search'

  # TODO: resourcesで置き換える(friendships/destroy/:idなど)
  namespace :api, { format: 'json' } do
    get 'messages/render_message'
    post 'messages/post_message' => 'messages#post_message'
    post 'messages/post_image'   => 'messages#post_image'

    get 'users/search' => 'users#search'
    get 'users/fetch_current_user'      => 'users#fetch_current_user'
    get 'users/fetch_friends_data_list' => 'users#fetch_friends_data_list'

    post   'friendships' => 'friendships#create'
    delete 'friendships' => 'friendships#destroy'
    get 'friendships/update_last_access' => 'friendships#update_last_access'
  end
end
