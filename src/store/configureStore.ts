import { createStore } from "redux";
import { createBrowserHistory } from "history";
import createRootReducer from "../reducers";

export const history = createBrowserHistory();

const configureStore = function () {
  const rootReducer = createRootReducer();
  const store = createStore(rootReducer);

  return store;
};

export default configureStore;
