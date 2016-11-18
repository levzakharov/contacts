import {REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAILURE} from '../actions/registration';

const initialState = () => {
    return {
        isFetching: false,
        errorMessage: ''
    };
};

const registration = (state = initialState(), action) => {
    switch (action.type) {
        case (REGISTRATION_REQUEST):
            return {
                ...state,
                isFetching: true
            };
        case (REGISTRATION_SUCCESS):
            return {
                ...state,
                isFetching: false,
                errorMessage: ''
            };
        case (REGISTRATION_FAILURE):
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
            };
        default:
            return state;
    }
};

export default registration;