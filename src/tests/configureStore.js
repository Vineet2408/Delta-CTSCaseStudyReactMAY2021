
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducers/index'


export const middlewares = [thunk];
export default createStore(rootReducer,{}, applyMiddleware(thunk, logger));















