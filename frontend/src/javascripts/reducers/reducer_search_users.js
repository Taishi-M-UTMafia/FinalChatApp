import { FETCH_USER } from '../actions/action_users';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_USER:
      return action.payload.data
  }
  return state
}
