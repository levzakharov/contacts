import {combineReducers} from 'redux';
import registration from './registration';
import authentication from './authentication';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({registration, authentication, usersReducer});

export default rootReducer;