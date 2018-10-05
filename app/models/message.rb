class Message < ApplicationRecord
  belongs_to :user
  belongs_to :friendship

  validates :content,       presence: true, length: { maximum: 50 }
  validates :user_id,       presence: true
  validates :friendship_id, presence: true
  validates :message_type,  presence: true
  validates :timestamp,     presence: true

  enum message_type: { text: 'text', image: 'image'}
end
