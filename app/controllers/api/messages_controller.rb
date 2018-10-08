module Api
  class MessagesController < ApplicationController
    before_action :set_friendship_variable

    def post_message
      @new_message = Message.new(content: params[:content],
                                user_id: current_user.id,
                                friendship_id: @friendship.id,
                                message_type: 'text',
                                timestamp: Time.now.to_i)
      @new_message.save and render 'render_message', formats: 'json', handlers: 'jbuilder'
    end

    # TODO: ストロングパラメータ
    def post_image
      posted_image = params[:image]
      path         = Time.now.to_i.to_s + posted_image.original_filename
      output_path  = Rails.root.join('public/message_images', path)
      @new_message  = Message.new(content: path,
                                 user_id: current_user.id,
                                 friendship_id: @friendship.id,
                                 message_type: "image",
                                 timestamp: Time.now.to_i)

      File.open(output_path, 'w+b') { |fp| fp.write  posted_image.tempfile.read }
      @new_message.save and render 'render_message', formats: 'json', handlers: 'jbuilder'
    end
  end
end
