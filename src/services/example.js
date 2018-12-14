import request from '../utils/user';

export function query() {
  return request('/api/users');
}
