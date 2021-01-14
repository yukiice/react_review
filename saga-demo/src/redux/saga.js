import { takeEvery } from "redux-saga/effects";
import { ADD_COUNT, DEL_COUNT } from "./Demo/constants";
import { addAction, delAction } from "./Demo/actionCreators";

function* saga() {
  yield takeEvery([
    { ADD_COUNT, addAction },
    { DEL_COUNT, delAction },
  ]);
}

export default saga;
