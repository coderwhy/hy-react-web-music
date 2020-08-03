import { fromJS } from "immutable";
import * as actionTypes from './constants';

const defaultState = fromJS({
  categories: [],
  currentId: 0,
  recommends: [],
  radios: []
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_RADIO_CATEGORY:
      return state.set("categories", action.categories);
    case actionTypes.CHANGE_CURRENT_ID:
      return state.set("currentId", action.currentId);
    case actionTypes.CHANGE_RECOMMENDS:
      return state.set("recommends", action.recommends);
    case actionTypes.CHANGE_RADIOS:
      return state.set("radios", action.radios);
    default: 
      return state;
  }
}