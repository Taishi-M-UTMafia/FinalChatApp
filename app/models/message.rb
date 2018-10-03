class Message < ApplicationRecord
  # belongs_to :user

  validates :content,       presence: true, length: { maximum: 50 }
  # validates :from_user_id,       presence: true
  # validates :chat_room_id,  presence: true
  # validates :message_type,  presence: true
  # validates :timestamp,     presence: true

  enum message_type: { text: 'text', image: 'image'}
end
