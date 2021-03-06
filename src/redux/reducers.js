import { combineReducers } from "redux";

import userReducer from "../screens/UserDuck";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
