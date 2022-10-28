import * as actionTypes from "./constants";

import { 
  getTopBanner,
  getHotRecommend,
  getNewAlbum,
  getTopList,
  getArtistList
} from "@/services/recommend";

const changeBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BNNAER,
  banners: res.banners
})

const changeRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  recommends: res.result
})

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbum: res.albums
})

const changeUpListAction = (res) => ({
  type: actionTypes.CHANGE_UP_LIST,
  topUpList: res.playlist
})

const changeNewListAction = (res) => ({
  type: actionTypes.CHANGE_NEW_LIST,
  topNewList: res.playlist
})

const changeOriginListAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_LIST,
  topOriginList: res.playlist
})

const changeSettleSingsAction = (res) => ({
  type: actionTypes.CHANGE_SETTLE_SONGER,
  settleSings: res.artists
})


export const getBanner = () => {
  return dispatch => {
    getTopBanner().then(res => {
      dispatch(changeBannerAction(res));
    })
  }
}

export const getRecommend = () => {
  return dispatch => {
    getHotRecommend().then(res => {
      dispatch(changeRecommendAction(res))
    })
  }
}

export const getAlbum = () => {
  return dispatch => {
    getNewAlbum(10, 0).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getTopData = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 19723756:
          dispatch(changeNewListAction(res));
          break;
        case 3779629:
          dispatch(changeOriginListAction(res));
          break;
        case 2884035:
          dispatch(changeUpListAction(res));
          break;
        default:
          console.log("其他数据处理");
      }
    })
  }
}

export const getSettleSingers = () => {
  return dispath => {
    getArtistList(5, 5001).then(res => {
      dispath(changeSettleSingsAction(res))
    })
  }
}
