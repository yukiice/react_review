import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import createSagaMiddleware from "redux-saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const storeEnhancer = applyMiddleware(sagaMiddleware);

const store = createStore(reducer, composeEnhancers(storeEnhancer));

export default store;
