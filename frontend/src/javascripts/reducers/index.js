import { combineReducers } from 'redux';
import SearchUsers from './reducer_search_users'
import FriendsDataList from './reducer_friends_data_list'
import OpenChatId from './reducer_open_chat_id'
import CurrentUser from './reducer_current_user'

const rootReducer = combineReducers({
  searchUsers: SearchUsers,
  friendsDataList: FriendsDataList,
  openChatId: OpenChatId,
  currentUser: CurrentUser
});

export default rootReducer;
