import { ADD_FIVE_COUNT, DEL_FIVE_COUNT } from "./contants";

export const addFiveAction = (num) => ({
  type: ADD_FIVE_COUNT,
  num,
});

export const delFiveAction = (num) => ({
  type: DEL_FIVE_COUNT,
  num,
});
