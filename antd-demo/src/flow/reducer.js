import {
  ADD_NUMBER,
  SUB_NUMBER,
  ADD_NULLNUMBER,
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS,
} from "./constants";

const initState = {
  count: 0,
  banners: [],
  recommends: [],
};

// 这样就可以actionTypes.XXX来引入
// import * as actionTypes from './constants'

function reducer(state = initState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, count: state.count + action.num };
    case SUB_NUMBER:
      return { ...state, count: state.count - action.num };
    case ADD_NULLNUMBER:
      return { ...state, count: state.count + 1 };
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    case CHANGE_RECOMMENDS:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}

export default reducer;
