import { ADD_ACTION,DEL_ACTION } from "./constances";

const initState = {
  count: 0,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case ADD_ACTION:
      return { ...state, count: state.count + 1 };
    case DEL_ACTION:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
