import { createStore, applyMiddleware,compose} from "redux";
import thunkMiddleware  from 'redux-thunk'
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga'
import saga from './saga'

// composeEnhancers函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose



// 应用中间件
// const storeEnhancer =  applyMiddleware(thunkMiddleware)

// 创建saga中间件
const sagaMiddleware = createSagaMiddleware()

// 应用saga中间件
const storeEnhancer = applyMiddleware(thunkMiddleware,sagaMiddleware)

const store = createStore(reducer,composeEnhancers(storeEnhancer));

sagaMiddleware.run(saga)
export default store;
