import { combineReducers } from 'redux';
import login from './login';
import post from './post';

const rootReducer = combineReducers({ login, post });

export default rootReducer;