import { takeEvery, put, all, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { FETCH_HOME_MUTLIDATA } from "./constants";
import { changeBannersAction, changeRecommendsAction } from "./actionCreators";

// 第二个参数  是个生成器函数
function* fetcHomeMultiDataAction(action) {
  const res = yield axios.get(`http://123.207.32.32:8000/home/multidata`);
  const banners = res.data.data.banner.list;
  const recommends = res.data.data.recommends;
  // yield put(changeBannersAction(banners))
  // yield put(changeRecommendsAction(recommends))
  yield all([
    yield put(changeBannersAction(banners)),
    yield put(changeRecommendsAction(recommends)),
  ]);
}

function* saga() {
  // takeLatest takeEvery区别
  // takeLatest 依次只能监听一个对应的action
  // takeEvery  每一个都会被监听执行
  // yield takeEvery(FETCH_HOME_MUTLIDATA,fetcHomeMultiDataAction)
  yield all([takeLatest(FETCH_HOME_MUTLIDATA, fetcHomeMultiDataAction)]);
}

export default saga;
