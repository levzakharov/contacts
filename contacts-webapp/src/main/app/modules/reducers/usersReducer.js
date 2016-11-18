import {
    GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE,
    CREATE_USER_SUCCESS,
    GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE,
    UPDATE_USER_SUCCESS,
    DELETE_USER_SUCCESS
} from '../actions/users';

const initialState = () => {
    return {
        isFetching: false,
        error: false,
        users: [],
        user: {},
        newUser: {}
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

        case CREATE_USER_SUCCESS:
            return {
                ...state,
                users: [...state.users, action.newUser]
            };

        case GET_USER_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: false,
                user: action.user
            };
        case GET_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            };

        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                user: action.updatedUser
            };

        case DELETE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.filter(user => user.login != action.login)
            };
        default:
            return state;
    }
};

export default usersReducer;