import { UPDATE_OPEN_CHAT_ID } from '../actions/action_messages'

export default (state = null, action) => {
  switch(action.type) {
    case UPDATE_OPEN_CHAT_ID:
      return action.payload
  }
  return state
}
