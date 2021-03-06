import axios from  'axios';
import { actionTypes } from '../constants'
axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content') // CSRF対策

export function updateOpenChatId(newId) {
  return {
    type: actionTypes.UPDATE_OPEN_CHAT_ID,
    newId
  }
}

export function postMessage(toUserId, content) {
  return axios.post('/api/messages/post_message', { to_user_id: toUserId, content })
    .then(response => {
      return {
        type: actionTypes.POST_MESSAGE_OR_IMAGE,
        newMessageData: response.data
      }
    }).catch(error => alert(error))
}

export function postImage(toUserId, image) {
  let imageFile = new FormData()
  imageFile.append('image', image, image.name)
  imageFile.append('to_user_id', toUserId)
  return axios({
    method: 'post',
    url: '/api/messages/post_image',
    data: imageFile,
    headers: {'Content-Type': 'multipart/form-data' },
  }).then(response => {
      return {
        type: actionTypes.POST_MESSAGE_OR_IMAGE,
        newMessageData: response.data
      }
    }).catch(error => alert(error))
}
