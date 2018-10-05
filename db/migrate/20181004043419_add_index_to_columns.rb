class AddIndexToColumns < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :name
    add_index :messages, :chat_room_id
  end
end
