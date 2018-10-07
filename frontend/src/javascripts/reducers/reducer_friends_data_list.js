import _ from 'lodash'
import { FETCH_FRIENDS_DATA_LIST } from '../actions/action_users'
// import { POST_MESSAGE_OR_IMAGE } from '../actions/action_messages'
import { DESTROY_FRIENDSHIP } from '../actions/action_friendships'

export default (state = [], action)  => {
  switch(action.type){
    case FETCH_FRIENDS_DATA_LIST:
      return action.payload.data

    // case POST_MESSAGE_OR_IMAGE:
    //   return

    case DESTROY_FRIENDSHIP:
      let newData = []
      Object.assign(newData, state)
      _.remove(newData, newData => { return newData.friend.id === action.payload.data.id })
      return newData
  }
  return state;
}
