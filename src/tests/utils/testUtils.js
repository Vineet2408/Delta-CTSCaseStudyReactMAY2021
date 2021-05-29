import rootReducer from "../../store/reducers";

import { createStore,applyMiddleware } from "redux";
import { middlewares } from "../configureStore";

export const findByTestAttr = (wrapper,val)=>{
    return wrapper.find(`[data-test='${val}']`);
}

export  const storeFactory = (initialState)=>{
    return createStore(rootReducer,initialState,applyMiddleware(...middlewares))
}

