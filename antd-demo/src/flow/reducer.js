import { ADD_NUMBER, SUB_NUMBER, ADD_NULLNUMBER } from "./constants";

const initState = {
  count: 0,
};

function reducer(state = initState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, count: state.count + action.num };
    case SUB_NUMBER:
      return { ...state, count: state.count - action.num };
    case ADD_NULLNUMBER:
      return { ...state, count: state.count + 1 };
      default:
          return state
  }
}

export default reducer;
