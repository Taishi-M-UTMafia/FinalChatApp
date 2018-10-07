import axios from 'axios';
axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content');

export const FETCH_USER = 'FETCH_USER';
export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';
export const FETCH_FRIENDS_DATA_LIST = 'FETCH_FRIENDS_DATA_LIST';

export function fetchUsers(value) {
  return axios.get('/api/users/search', { params: { value } })
    .then(response => {
      return{
        type: FETCH_USER,
        payload: response
      };
    })
    .catch(error => alert(error))
}

export function fetchCurrentUser() {
  return axios.get('/api/users/fetch_current_user')
    .then(response => {
      return{
        type: FETCH_CURRENT_USER,
        payload: response
      }
    })
    .catch(error => alert(error))
}

export function fetchFriendsDataList() {
  return axios.get('/api/users/fetch_friends_data_list')
    .then(response => {
      return{
        type: FETCH_FRIENDS_DATA_LIST,
        payload: response
      };
    })
    .catch(error => alert(error))
}
