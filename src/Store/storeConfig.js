import { createStore, combineReducers } from "redux";
import NumerosReducer from "./reducers/numerosReducers";
const reducers = combineReducers({
  numeros: NumerosReducer,
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
