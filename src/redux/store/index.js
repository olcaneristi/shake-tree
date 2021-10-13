import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { appleReducer } from '../reducers';

// tum reducerlarimi combineReducers ile tek bir fonksiyon altinda topluyorum. benim su anlik tek reducerim var.
const rootReducer = combineReducers({
  // store'da tanimladigim isim sayesinde componentlerde "apples" ismi ile reducerimi state'ten cagirabilecegim.
  apples: appleReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)));

export default store;
