import _ from 'lodash'
import { actionTypes } from '../constants'

export default (state = [], action) => {
  let newDataList = Object.assign([], state)

  switch(action.type){
    case actionTypes.FETCH_FRIENDS_DATA_LIST:
      return action.friendsDataList

    case actionTypes.POST_MESSAGE_OR_IMAGE:
      let friendDataToUpdate = _.find(newDataList, newData => {
        return newData.friend.id === action.newMessageData.toUserId
      })
      friendDataToUpdate.messages.push(action.newMessageData.newMessage)
      return newDataList

    case actionTypes.DESTROY_FRIENDSHIP:
      _.remove(newDataList, newData => { return newData.friend.id === action.friendship.id })
      return newDataList

    case actionTypes.UPDATE_LAST_ACCESS:
      let oldFriendData = _.find(newDataList, newData => {
        return newData.friend.id === action.updatedFriendData.toUserId
      })
      oldFriendData.lastAccess = action.updatedFriendData.lastAccess
      return newDataList
  }
  return state;
}
