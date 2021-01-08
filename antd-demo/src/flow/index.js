import { createStore, applyMiddleware} from "redux";
import thunkMiddleware  from 'redux-thunk'
import reducer from "./reducer";

// 应用中间件
const storeEnhancer =  applyMiddleware(thunkMiddleware)

const store = createStore(reducer,storeEnhancer);

export default store;
