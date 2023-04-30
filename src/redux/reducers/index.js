import { combineReducers } from 'redux';
import login from './login';
import comments from './comments';


const rootReducer = combineReducers({ login, comments });

export default rootReducer;