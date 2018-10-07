json.array! @friends do |friend|
  friendship = Friendship.find_by(id_combination: friend.id_combination_with(current_user))

  json.friend friend
  json.messages friendship.messages
  json.lastAccess do
    if current_user.id == friendship.from_user_id
      json.currentUser friendship.from_user_last_access
      json.recipient friendship.to_user_last_access
    elsif friend.id == friendship.from_user_id
      json.currentUser friendship.to_user_last_access
      json.recipient friendship.from_user_last_access
    end
  end
end
