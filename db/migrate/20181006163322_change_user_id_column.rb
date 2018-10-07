class ChangeUserIdColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :messages, :user_id, :integer
  end
end
