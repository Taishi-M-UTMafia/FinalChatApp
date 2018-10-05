import axios from  'axios';
axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content')

export function createFriendship(userId) {
  return axios.post('/api/friendships', {to_user_id: userId})
  .then(response => {
    if (response.status !== 200) alert('その人はすでに友達です')
  })
  .catch(error => alert('通信に失敗しました'))
}
