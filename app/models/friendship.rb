class Friendship < ApplicationRecord
  belongs_to :from_user, class_name: 'User'
  belongs_to :to_user,   class_name: 'User'
  has_many :messages, dependent: :destroy

  validates :from_user_id, presence: true
  validates :to_user_id,   presence: true
  # これにより友達関係の一意性を担保
  validates :id_combination, presence: true, uniqueness: true,
                             format: { with: /[1-9][0-9]*-[1-9][0-9]*/}
end
