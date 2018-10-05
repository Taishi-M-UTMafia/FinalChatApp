import { FETCH_FRIENDS_DATA_LIST } from '../actions/action_users'

export default (state = [], action)  => {
  switch(action.type){
    case FETCH_FRIENDS_DATA_LIST:
      return action.payload.data
  }
  return state;
}
