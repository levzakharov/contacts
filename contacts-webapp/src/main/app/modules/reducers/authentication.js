import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/authentication';

const initialState = () => {
    const token = '';
    return {
        isFetching: false,
        isAuthenticated: token ? true : false,
        token: token ? token : null
    };
};

const authentication = (state = initialState(), action) => {
    switch (action.type) {
        case (LOGIN_REQUEST):
            return {
                ...state,
                isFetching: true,
                isAuthenticated: false,
                errorMessage: ''
            };
        case (LOGIN_SUCCESS):
            return {
                ...state,
                isFetching: false,
                isAuthenticated: true,
                token: action.token,
                errorMessage: ''
            };
        case (LOGIN_FAILURE):
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            };
        default:
            return state;
    }
};

export default authentication;