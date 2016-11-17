import {createStore} from 'redux';
import rootReducer from '../reducers/index';

const configureStore = (initialState) => (
    createStore(rootReducer, initialState)
);

export default configureStore;
