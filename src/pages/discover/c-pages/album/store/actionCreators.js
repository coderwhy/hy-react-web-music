import * as actionTypes from './constants';

import {
  getHotAlbums,
  getTopAlbums
} from '@/services/album.js';

const changeHotAlbumsAction = (res) => ({
  type: actionTypes.CHANGE_HOT_ALBUMS,
  hotAlbums: res.albums
})

const changeTopAlbumAction = (res) => ({
  type: actionTypes.CHANGE_TOP_ALBUMS,
  topAlbums: res.albums
})

export const getHotAlbumsAction = () => {
  return dispatch => {
    getHotAlbums().then(res => {
      dispatch(changeHotAlbumsAction(res));
    })
  }
}

export const getTopAlbumsAction = () => {
  return dispatch => {
    getTopAlbums(30, 0).then(res => {
      dispatch(changeTopAlbumAction(res));
    })
  }
}
