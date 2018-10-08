import axios from 'axios';
import { actionTypes } from '../constants'
axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content');

export function fetchUsers(value) {
  return axios.get('/api/users/search', { params: { value } })
    .then(response => {
      return{
        type: actionTypes.FETCH_SEARCH_USER,
        searchUser: response.data
      };
    })
    .catch(error => alert(error))
}

export function fetchCurrentUser() {
  return axios.get('/api/users/fetch_current_user')
    .then(response => {
      return{
        type: actionTypes.FETCH_CURRENT_USER,
        currentUser: response.data
      }
    })
    .catch(error => alert(error))
}

export function fetchFriendsDataList() {
  return axios.get('/api/users/fetch_friends_data_list')
    .then(response => {
      return{
        type: actionTypes.FETCH_FRIENDS_DATA_LIST,
        friendsDataList: response.data
      };
    })
    .catch(error => alert(error))
}
