import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  currentArea: -1,
  currentType: {
    name: "推荐歌手",
    type: 1
  }
});

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_CURRENT_AREA:
      return state.set("currentArea", action.currentArea);
    case actionTypes.CHANGE_CURRENT_TYPE:
      return state.set("currentType", action.currentType);
    default:
      return state;
  }
}

export default reducer;
