import { legacy_createStore, combineReducers , applyMiddleware } from "redux";
import { reducer as AuthReducer } from "./Redux/AuthReducer/reducer";
import { reducer as ProductReducer } from "./Redux/ProductReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ AuthReducer, ProductReducer });

const store = legacy_createStore(rootReducer , applyMiddleware(thunk));

export { store };
