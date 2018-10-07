import axios from  'axios';
axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content')

export const DESTROY_FRIENDSHIP ='DESTROY_FRIENDSHIP'

export function createFriendship(toUserId) {
  return axios.post('/api/friendships', { to_user_id: toUserId })
  .then(response => {
    if (response.status !== 200) window.confirm('その人はすでに友達です')
  })
  .catch(error => alert('通信に失敗しました'))
}

export function destroyFriendship(toUserId) {
  return axios.delete('/api/friendships', { data: { to_user_id: toUserId } })
  .then(response => {
    return {
      type: DESTROY_FRIENDSHIP,
      payload: response
    }
  })
  .catch(error => alert('通信に失敗しました'))
}

// TODO: エラー解決
export function updateLastAccess(toUserId) {
  return axios.get('/api/friendships/update_last_access', { params: { to_user_id: toUserId} })
    .then(response => {
      if (response.status !== 200) alert('その人はすでに友達です')
    })
    .catch(error => alert('通信に失敗しました'))
}
