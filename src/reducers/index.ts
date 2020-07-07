import { combineReducers } from "redux";

// user reducers가 불필요해보인다.

const createRootReducer = () => combineReducers({});

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;

export default createRootReducer;
