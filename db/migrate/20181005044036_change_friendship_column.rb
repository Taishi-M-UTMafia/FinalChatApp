class ChangeFriendshipColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :messages, :friendship_id, :integer
  end
end
