import { actionTypes } from '../constants'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENT_USER:
      return action.currentUser
  }
  return state
}
