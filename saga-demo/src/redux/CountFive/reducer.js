import { ADD_FIVE_COUNT, DEL_FIVE_COUNT } from "./contants";

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FIVE_COUNT:
      return { ...state, count: state.count + action.num };
    case DEL_FIVE_COUNT:
      return { ...state, count: state.count - action.num };
    default:
      return state;
  }
}

export default reducer;
