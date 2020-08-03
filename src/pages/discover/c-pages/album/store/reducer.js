import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  hotAlbums: [],
  topAlbums: []
})

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_HOT_ALBUMS:
      return state.set("hotAlbums", action.hotAlbums);
    case actionTypes.CHANGE_TOP_ALBUMS:
      return state.set("topAlbums", action.topAlbums)
    default:
      return state;
  }
}
