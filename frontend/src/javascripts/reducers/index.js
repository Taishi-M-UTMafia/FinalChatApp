import { combineReducers } from 'redux';
import Messages from './reducer_messages'
import SearchUsers from './reducer_search_users'
import FriendsDataList from './reducer_friends_data_list'
import OpenChatId from './reducer_open_chat_id'

const rootReducer = combineReducers({
  searchUsers: SearchUsers,
  friendsDataList: FriendsDataList,
  openChatId: OpenChatId
});

export default rootReducer;
