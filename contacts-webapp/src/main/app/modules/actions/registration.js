import config from '../config';
import {browserHistory} from 'react-router';
export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST ';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS ';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';

function requestRegistration() {
    return {
        type: REGISTRATION_REQUEST
    };
}

function receiveRegistration() {
    return {
        type: REGISTRATION_SUCCESS
    };
}

function registrationError(message) {
    return {
        type: REGISTRATION_FAILURE,
        message
    };
}

export function register(username, password) {
    const init = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${username}&password=${password}`
    };
    return (dispatch) => {
        dispatch(requestRegistration());
        return fetch(`${config.serverUrl}/registration`, init)
            .then(response => response.text().then(data => ({data, response})))
            .then(({data, response}) => {
                if (!response.ok) {
                    dispatch(registrationError(data));
                } else {
                    dispatch(receiveRegistration());
                    browserHistory.push('/login');
                }
            }).catch(err => console.log('Error: ', err));
    };
}
