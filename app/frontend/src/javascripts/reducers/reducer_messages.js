import { FETCH_MESSAGES } from '../actions/action_messages'
import { POST_MESSAGE } from '../actions/action_messages'

export default function(state=[], action) {
  switch(action.type) {
    case FETCH_MESSAGES:
      return action.payload.data;

    case POST_MESSAGE:
      return state.concat([action.payload.data])
  }
  return state
}
