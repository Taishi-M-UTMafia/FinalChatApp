module Api
  class UsersController < ApplicationController
    def search
      search_users = User.limit(5).where('name LIKE ?', "%#{params[:value]}%").where.not(id: current_user.id)
      render json: search_users
    end

    def fetch_current_user
      render json: current_user
    end

    def fetch_friends_data_list
      @friends = current_user.friends
      render 'fetch_friends_data_list', formats: 'json', handlers: 'jbuilder'
    end
  end
end
