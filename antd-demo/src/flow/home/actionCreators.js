import {
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS,
  FETCH_HOME_MUTLIDATA,
} from "./constants.js";

import axios from "axios";

export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners,
});

export const changeRecommendsAction = (recommends) => ({
  type: CHANGE_RECOMMENDS,
  recommends,
});

// redux-thunk中定义的action函数
export const getHomeMultiDataAction = (dispatch) => {
  console.log("111", dispatch);
  axios({
    url: "http://123.207.32.32:8000/home/multidata",
  }).then((res) => {
    const data = res.data.data;
    console.log(data);
    dispatch(changeBannersAction(data.banner.list));
    dispatch(changeRecommendsAction(data.recommend.list));
  });
};

// redux-saga中间件的action函数

export const fetcHomeMultiDataAction = {
  type: FETCH_HOME_MUTLIDATA,
};
