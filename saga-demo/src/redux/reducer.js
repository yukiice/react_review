import { reducer as countReducer } from "./Demo";

import { reducer as countFiveReducer } from "./CountFive";

import { combineReducers } from "redux";

const reducer = combineReducers({
  countInfo: countReducer,
  countFiveInfo:countFiveReducer
});

export default reducer;
