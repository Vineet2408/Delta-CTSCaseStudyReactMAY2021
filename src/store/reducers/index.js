


import { combineReducers } from "redux";

import useReducer from "./userReducers";

const rootReducer = combineReducers({
    users:useReducer
});

export default rootReducer;
