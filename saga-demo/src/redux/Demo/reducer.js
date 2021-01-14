import { ADD_COUNT, DEL_COUNT } from "./constants";

const initialState = {
  count: 0,
};

function countReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNT:
      return { ...state, count: state.count + 1 };
    case DEL_COUNT:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}

export default countReducer;
