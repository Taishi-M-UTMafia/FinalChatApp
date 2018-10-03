import axios from 'axios';
axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content');

export const FETCH_USER = 'FETCH_USER';

export function fetchUsers(value) {
  const request = axios.get('/api/users/search', {
    params: { value: value }
  });
  return{
    type: FETCH_USER,
    payload: request
  };
}
