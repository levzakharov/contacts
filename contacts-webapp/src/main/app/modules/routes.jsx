import React from 'react';
import {Route, IndexRoute, IndexRedirect} from 'react-router';

import App from './containers/App';
import RegistrationPage from './containers/RegistrationPage';
import LoginPage from './containers/LoginPage';
import Users from './containers/Users';
import UserListPage from './containers/UserListPage';
import UserViewPage from './containers/UserViewPage';

export const getRoutes = (store) => {
    const isAuthenticated = () => {
        const {authentication: {isAuthenticated}} = store.getState();
        return isAuthenticated;
    };

    const onEnterContacts = (nextState, replace, callback) => {
        if (isAuthenticated()) {
            callback();
        } else {
            replace({pathname: '/login'});
            callback();
        }
    };

    const onEnterLogin = (nextState, replace, callback) => {
        if (!isAuthenticated()) {
            callback();
        } else {
            replace({pathname: '/'});
            callback();
        }
    };

    return (
        <Route path="/" component={App}>
            <IndexRedirect to="/users"/>
            <Route path="/users" component={Users} onEnter={onEnterContacts}>
                <IndexRoute component={UserListPage}/>
                <Route path="view/:login" component={UserViewPage}/>
            </Route>
            <Route path="registration" component={RegistrationPage} onEnter={onEnterLogin}/>
            <Route path="login" component={LoginPage} onEnter={onEnterLogin}/>
        </Route>
    );
};
