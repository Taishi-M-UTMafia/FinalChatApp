import { actionTypes } from '../constants';

export default (state = [], action) => {
  switch(action.type) {
    case actionTypes.FETCH_SEARCH_USER:
      return action.searchUser
  }
  return state
}
