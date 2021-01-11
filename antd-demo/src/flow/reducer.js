import { reducer as countReducer } from "./count";

import { reducer as homeReducer } from "./home";

import {combineReducers} from 'redux'

// 这样就可以actionTypes.XXX来引入
// import * as actionTypes from './constants'

// function reducer(state = {}, action) {
//   return {
//     countInfo: countReducer(state.countInfo, action),
//     homeInfo: homeReducer(state.homeInfo, action),
//   };
// }

// 可以借助redux中的API来进行reducer的合并
const reducer = combineReducers({
  countInfo:countReducer,
  homeInfo:homeReducer
})

export default reducer;
