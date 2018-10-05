json.array! @friends do |friend|
  friendship = Friendship.find_by(id_combination: friend.id_combination_with(current_user))

  json.friend friend
  json.messages friendship.messages
  json.last_access do
    json.from_user friendship.from_user_last_access
    json.to_user friendship.to_user_last_access
  end
end
