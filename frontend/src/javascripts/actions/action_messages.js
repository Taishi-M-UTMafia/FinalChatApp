import axios from  'axios';
axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content') // CSRF対策

export const UPDATE_OPEN_CHAT_ID = 'UPDATE_OPEN_CHAT_ID';
export const POST_MESSAGE_OR_IMAGE = 'POST_MESSAGE_OR_IMAGE';

export function updateOpenChatId(newId) {
  return {
    type: UPDATE_OPEN_CHAT_ID,
    payload: newId
  }
}

// TODO: typeをImageと統合
export function postMessage(toUserId, content) {
  return axios.post('/api/messages/post_message', { to_user_id: toUserId, content })
    .then(response => {
      return {
        type: POST_MESSAGE_OR_IMAGE,
        payload: response
      }
    })
    .catch(error => alert(error))
}

export function postImage(toUserId, image) {
  return axios.post('/api/messages/post_image', { to_user_id: toUserId, image})
    .then(response => {
      return {
        type: POST_MESSAGE_OR_IMAGE,
        payload: response
      }
    })
    .catch(error => alert(error))
}
