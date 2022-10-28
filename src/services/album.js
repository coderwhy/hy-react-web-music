import request from './axios';

export function getHotAlbums() {
  return request({
    url: "/album/newest"
  })
}

export function getTopAlbums(limit, offset) {
  return request({
    url: "/album/new",
    params: {
      limit,
      offset
    }
  })
}