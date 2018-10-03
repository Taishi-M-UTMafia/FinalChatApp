class User < ApplicationRecord
  has_many :messages, dependent: :destroy
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  mount_uploader :image_name, AvatarUploader
end
