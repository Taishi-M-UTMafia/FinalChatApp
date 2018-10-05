class ChangeColumnOfMessages < ActiveRecord::Migration[5.2]
  def change
    rename_column :messages, :from_user_id, :user_id
  end
end
