import axios from  'axios';
axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content') // CSRF対策

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const POST_MESSAGE = 'POST_MESSAGE';

export function fetchMessages() {
  const request = axios.get('/api/messages');
  return {
    type: FETCH_MESSAGES,
    payload: request
  }
}

export function postMessage(content) {
  const request = axios.post('/api/messages/post_message', { content })
  return {
    type: POST_MESSAGE,
    payload: request
  }
}

export function postImage(image) {
  const request = hoge
}
