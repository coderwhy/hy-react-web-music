import request from "./axios";

export function getTopList() {
  return request({
    url: "/toplist"
  })
}

// 获取榜单详情
export function getRankingList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}