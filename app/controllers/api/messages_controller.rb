module Api
  class MessagesController < ApplicationController
    before_action :set_friendship_variable

    def post_message
      # TODO: lastAccessも更新
      new_message = Message.new(content: params[:content],
                                user_id: current_user.id,
                                friendship_id: @friendship.id,
                                message_type: 'text',
                                timestamp: Time.now.to_i)
      new_message.save and render json: new_message
    end

    def destroy_message
      message_to_destroy = Message.find_by(id: params[:message_id])
      message_to_destroy.destroy and render json: @chat_room.all_messages
    end

    def post_image
      posted_image = params[:image]
      path         = Time.now.to_i.to_s + posted_image.original_filename
      output_path  = Rails.root.join('public/message_images', path)
      new_image    = Message.new(content: path,
                                 user_id: current_user.id,
                                 friendship_id: @friendship.id,
                                 message_type: "image",
                                 timestamp: Time.now.to_i)

      File.open(output_path, 'w+b') { |fp| fp.write  posted_image.tempfile.read }

      new_image.save and render json: @chat_room.all_messages
    end
  end
end
