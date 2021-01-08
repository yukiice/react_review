import {
  ADD_NUMBER,
  SUB_NUMBER,
  ADD_NULLNUMBER,
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS,
} from "./constants.js";

import axios from 'axios'

export const addAction = (num) => ({
  type: ADD_NUMBER,
  num,
});

export const subAction = (num) => ({
  type: SUB_NUMBER,
  num,
});

export const addNullAction = () => ({
  type: ADD_NULLNUMBER,
});

export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners
});

export const changeRecommendsAction = (recommends) => ({
  type: CHANGE_RECOMMENDS,
  recommends
});


// redux-thunk中定义的action函数
export const getHomeMultiDataAction = (dispatch)=>{
    console.log('111',dispatch)
    axios({
        url:'http://123.207.32.32:8000/home/multidata'
    }).then(res=>{
        const data = res.data.data
        console.log(data);
        dispatch(changeBannersAction(data.banner.list))
        dispatch(changeRecommendsAction(data.recommend.list))
    })
}