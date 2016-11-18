import {combineReducers} from 'redux';
import registration from './registration';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({registration, usersReducer});

export default rootReducer;