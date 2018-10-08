import _ from 'lodash'
import { FETCH_FRIENDS_DATA_LIST } from '../actions/action_users'
import { POST_MESSAGE_OR_IMAGE } from '../actions/action_messages'
import { DESTROY_FRIENDSHIP, UPDATE_LAST_ACCESS } from '../actions/action_friendships'

export default (state = [], action) => {
  let newDataList = Object.assign([], state)

  switch(action.type){
    case FETCH_FRIENDS_DATA_LIST:
      return action.friendsDataList

    case POST_MESSAGE_OR_IMAGE:
      let friendDataToUpdate = _.find(newDataList, newData => {
        return newData.friend.id === action.newMessageData.toUserId
      })
      friendDataToUpdate.messages.push(action.newMessageData.newMessage)
      return newDataList

    case DESTROY_FRIENDSHIP:
      _.remove(newDataList, newData => { return newData.friend.id === action.friendship.id })
      return newDataList

    case UPDATE_LAST_ACCESS:
      let oldFriendData = _.find(newDataList, newData => {
        return newData.friend.id === action.updatedFriendData.toUserId
      })
      oldFriendData.lastAccess = action.updatedFriendData.lastAccess
      return newDataList
  }
  return state;
}
