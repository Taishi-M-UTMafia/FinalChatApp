module Api
  class FriendshipsController < ApplicationController
    before_action :set_friendship_variable

    def create
      new_friendship = Friendship.new(from_user_id: current_user.id, to_user_id: params[:to_user_id],
                                      id_combination: @id_combination)
      new_friendship.save and render json: []
    end

    def destroy
      @friendship.destroy and render json: @to_user
    end

    def update_last_access
      if current_user.id === @friendship[:from_user_id]
        @friendship[:from_user_last_access] = Time.now.to_i
      elsif params[:to_user_id].to_i === @friendship[:from_user_id]
        @friendship[:to_user_last_access] = Time.now.to_i
      end
      @friendship.save and render 'update_last_access', formats: 'json', handlers: 'jbuilder'
    end
  end
end
