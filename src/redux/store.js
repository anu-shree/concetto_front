import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Events from "./events";
import Auth from "./auth.js";
import Users from "./users.js";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      events: Events,
      auth: Auth,
      users: Users
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
