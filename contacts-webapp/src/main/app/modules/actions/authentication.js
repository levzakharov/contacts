import {browserHistory} from 'react-router';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

function requestLogin() {
    return {
        type: LOGIN_REQUEST
    };
}

function receiveLogin(token) {
    return {
        type: LOGIN_SUCCESS,
        token
    };
}

function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        message
    };
}

export function login(username, password) {
    const init = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `username=${username}&password=${password}`
    };
    return (dispatch) => {
        dispatch(requestLogin());
        return fetch('http://localhost:8080/token', init)
            .then(response => response.text().then(token => ({token, response})))
            .then(({token, response}) => {
                if (!response.ok) {
                    dispatch(loginError(token));
                } else {
                    dispatch(receiveLogin(token));
                    browserHistory.push('/');
                }
            }).catch(err => console.log('Error: ', err));
    };
}

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS
    };
}

export function logout() {
    return (dispatch) => {
        dispatch(receiveLogout());
        browserHistory.push('/login');
    };
}