import {
    legacy_createStore,
    combineReducers,
  } from "redux";
  import { reducer as AuthReducer } from "./AuthReducer/reducer";
  import { reducer as ProductReducer } from "./ProductReducer/reducer";
  
  const rootReducer = combineReducers({ AuthReducer, ProductReducer });
  
  const store = legacy_createStore(
    rootReducer,
  );
  export { store };