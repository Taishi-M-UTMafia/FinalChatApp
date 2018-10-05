import axios from  'axios';
axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content') // CSRF対策

export const UPDATE_OPEN_CHAT_ID = 'UPDATE_OPEN_CHAT_ID';
export const POST_MESSAGE = 'POST_MESSAGE';

export function updateOpenChatId(newId) {
  return {
    type: UPDATE_OPEN_CHAT_ID,
    payload: newId
  }
}

export function postMessage(openChatId, content) {
  return axios.post('/api/messages/post_message', { to_user_id: openChatId, content })
    .then(response => {
      return {
        type: POST_MESSAGE,
        payload: response
      }
    })
    .catch(error => alert(error))
}

export function postImage(image) {
  const request = hoge
}
