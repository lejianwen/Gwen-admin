import request from '@/utils/request'

export function login (data) {
  return request({
    url: '/user.json',
    method: 'post',
    data,
  })
}

export function info () {
  return request({
    url: '/user.json',
    method: 'get',
  })
}
