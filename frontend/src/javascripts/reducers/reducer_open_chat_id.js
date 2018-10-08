import { actionTypes } from '../constants'

export default (state = null, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_OPEN_CHAT_ID:
      return action.newId
  }
  return state
}
