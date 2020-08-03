import * as actionTypes from "./constants";

import { 
  getTopList,
  getRankingList
} from "@/services/ranking";
 

const changeTopListAction = (res) => ({
  type: actionTypes.CHANGE_TOP_LIST,
  topList: res.list
})

const changePlayListAction = (res) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList: res.playlist
})

export const changeCurrentIndex = (index) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  currentIndex: index
}) 

export const getTops = () => {
  return dispatch => {
    getTopList().then(res => {
      dispatch(changeTopListAction(res));
    })
  }
}

export const getRanking = (id) => {
  return dispatch => {
    getRankingList(id).then(res => {
      dispatch(changePlayListAction(res))
    })
  }
}

