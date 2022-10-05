import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReduce";

const middleware = [logger, thunk];

const store = legacy_createStore(rootReducer, applyMiddleware(...middleware));

export default store;
