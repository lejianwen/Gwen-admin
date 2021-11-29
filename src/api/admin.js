import request from '@/utils/request'

export function list (params) {
  return request({
    url: '/admin.json',
    params,
  })
}

export function detail (id) {
  return request({
    url: '/adminDetail.json/',
  })
}

export function create (data) {
  return request({
    url: '/admin.json',
    method: 'post',
    data,
  })
}

export function update (data) {
  return request({
    url: '/admin.json',
    method: 'post',
    data,
  })
}

export function remove (data) {
  return request({
    url: '/admin.json',
    method: 'post',
    data,
  })
}

export function changePwd (data) {
  return request({
    url: '/admin.json',
    method: 'post',
    data,
  })
}
