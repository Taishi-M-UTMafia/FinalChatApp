class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :content
      t.string :from_user_id
      t.string :message_type

      t.timestamps
    end
  end
end
