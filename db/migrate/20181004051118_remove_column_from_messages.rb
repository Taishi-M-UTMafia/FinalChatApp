class RemoveColumnFromMessages < ActiveRecord::Migration[5.2]
  def change
    rename_column :messages, :chat_room_id, :friendship_id
  end
end
