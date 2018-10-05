class AddColumnsToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :chat_room_id, :string
    add_column :messages, :timestamp, :integer
  end
end
