class User < ApplicationRecord
  has_many :friendships_of_from_user, class_name: 'Friendship', foreign_key: 'from_user_id', dependent: :destroy
  has_many :friendships_of_to_user,   class_name: 'Friendship', foreign_key: 'to_user_id',   dependent: :destroy
  has_many :friends_of_from_user, through: :friendships_of_from_user, source: 'to_user'
  has_many :friends_of_to_user,   through: :friendships_of_to_user,   source: 'from_user'
  has_many :messages, dependent: :destroy

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  mount_uploader :image_name, AvatarUploader

  def friends
    friends_of_from_user + friends_of_to_user
  end

  def id_combination_with user
    user.id > self.id.to_i ? "#{self.id.to_i}-#{user.id}": "#{user.id}-#{self.id.to_i}"
  end
end
