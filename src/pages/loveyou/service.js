import request from '../../utils/user';

import config from "../confession/config.js"

const {api} = config

export function loveYou(id) {
  return request(api.createConfession+`/${id}`, {
    method: 'GET',
  });
}export function remove(id) {
  return request(`/api/users/${id}`, {
    method: 'DELETE',
  });
}

export function patch(id, values) {
  return request(`/api/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

// export function create(values) {
//   return request(api.createConfession, {
//     method: 'POST',
//     body: JSON.stringify(values),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// }
