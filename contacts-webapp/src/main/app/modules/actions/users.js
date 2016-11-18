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

export const getUsers = (token) => {
    const init = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
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

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';

const requestCreateUser = (newUser) => {
    return {
        type: CREATE_USER_SUCCESS,
        newUser
    };
};

export const createUser = (token, newUser) => {
    const init = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newUser)
    };

    return dispatch => {
        return fetch(`${config.serverUrl}/api/users`, init)
            .then(response => {
                if (response.ok) {
                    dispatch(requestCreateUser(newUser));
                }
            }).catch(err => console.log('Error: ', err));
    };
};


export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

const requestUser = () => {
    return {
        type: GET_USER_REQUEST
    };
};

function receiveUser(user) {
    return {
        type: GET_USER_SUCCESS,
        user
    };
}

function userError() {
    return {
        type: GET_USER_FAILURE
    };
}

export const getUser = (token, login) => {
    const init = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return dispatch => {
        dispatch(requestUser());

        return fetch(`${config.serverUrl}/api/users/${login}`, init)
            .then(response => response.json().then(user => ({user, response})))
            .then(({user, response}) => {
                if (response.ok) {
                    dispatch(receiveUser(user));
                } else {
                    dispatch(userError());
                }
            }).catch(err => console.log('Error: ', err));
    };
};

export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';

const requestUpdateUser = (updatedUser) => {
    return {
        type: UPDATE_USER_SUCCESS,
        updatedUser
    };
};

export const updateUser = (token, user) => {
    const init = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(user)
    };

    return dispatch => {

        return fetch(`${config.serverUrl}/api/users/${user.login}`, init)
            .then(response => {
                if (response.ok) {
                    dispatch(requestUpdateUser(user));
                }
            }).catch(err => console.log('Error: ', err));
    };
};

export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

const requestDeleteUser = (login) => {
    return {
        type: DELETE_USER_SUCCESS,
        login
    };
};

export const deleteUser = (token, login) => {
    const init = {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        },
    };

    return dispatch => {

        return fetch(`${config.serverUrl}/api/users/${login}`, init)
            .then(response => {
                if (response.ok) {
                    dispatch(requestDeleteUser(login));
                }
            }).catch(err => console.log('Error: ', err));
    };
};
