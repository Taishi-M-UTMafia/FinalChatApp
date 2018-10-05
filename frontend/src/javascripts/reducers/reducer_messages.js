import { POST_MESSAGE } from '../actions/action_messages'

export default function(state = [], action) {
  // const data = action.payload.data

  switch(action.type) {
    case POST_MESSAGE:
      // stateは配列なの？
      return state.concat([action.payload.data])
  }
  return state
}
