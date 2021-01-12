import {
    ADD_NUMBER,
    SUB_NUMBER,
    ADD_NULLNUMBER,
  } from "./constants";
  
  const countInitState = {
    count: 0,
  };
  
  // reducer是可以进行拆分的
  function countReducer(state = countInitState, action) {
    switch (action.type) {
      case ADD_NUMBER:
        return { ...state, count: state.count + action.num };
      case SUB_NUMBER:
        return { ...state, count: state.count - action.num };
      case ADD_NULLNUMBER:
        return { ...state, count: state.count + 1 };
      default:
        return state;
    }
  }
  
  export default countReducer;
  