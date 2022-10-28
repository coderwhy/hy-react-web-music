import request from "./axios";

export function getTopBanner() {
  return request({
    url: "/banner"
  })
}

export function getHotRecommend() {
  return request({
    url: "/personalized"
  })
}

export function getNewAlbum(limit, offset) {
  return request({
    url: "/album/new",
    params: {
      limit,
      offset
    }
  })
}

export function getTopList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}


export function getArtistList(limit, cat) {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit
    }
  })
}