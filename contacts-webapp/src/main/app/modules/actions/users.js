import config from '../config';

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

const requestUsers = () => {
    return {
        type: GET_USERS_REQUEST
    };
};

function receiveUsers(users) {
    return {
        type: GET_USERS_SUCCESS,
        users
    };
}

function usersError() {
    return {
        type: GET_USERS_FAILURE
    };
}

export const getUsers = () => {
    const init = {
        method: 'GET'
    };

    return dispatch => {
        dispatch(requestUsers());

        return fetch(`${config.serverUrl}/api/users`, init)
            .then(response => response.json().then(users => ({users, response})))
            .then(({users, response}) => {
                if (response.ok) {
                    dispatch(receiveUsers(users));
                } else {
                    dispatch(usersError());
                }
            }).catch(err => console.log('Error: ', err));
    };
};
