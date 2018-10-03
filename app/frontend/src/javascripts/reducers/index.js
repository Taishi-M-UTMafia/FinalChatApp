import { combineReducers } from 'redux';
import Messages from './reducer_messages'
import SearchUsers from './reducer_search_users'

const rootReducer = combineReducers({
  messages: Messages,
  searchUsers: SearchUsers
});

export default rootReducer;
