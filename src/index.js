import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import App from "./containers/App/App";
import * as serviceWorker from "./serviceWorker";
import { searchMusic, searchCountry, handleMusicCards, isCardShow, handleFavs, handleCountries  } from "./reducers";

const logger = createLogger();
const rootReducer = combineReducers({
  searchMusic,
  searchCountry,
  handleMusicCards,
  isCardShow,
  handleFavs,
  handleCountries
});
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
