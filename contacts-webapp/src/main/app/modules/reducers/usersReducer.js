import {GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE} from '../actions/users';

const initialState = () => {
    return {
        isFetching: false,
        error: false,
        users: []
    };
};

const usersReducer = (state = initialState(), action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case GET_USERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: false,
                users: action.users
            };
        case GET_USERS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        default:
            return state;
    }
};

export default usersReducer;