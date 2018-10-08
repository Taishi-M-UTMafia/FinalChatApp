json.toUserId @to_user.id
json.lastAccess do
  if current_user.id == @friendship.from_user_id
    json.currentUser @friendship.from_user_last_access
    json.recipient @friendship.to_user_last_access
  elsif @to_user.id == @friendship.from_user_id
    json.currentUser @friendship.to_user_last_access
    json.recipient @friendship.from_user_last_access
  end
end
