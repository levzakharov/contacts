import React from 'react';
import {Route, IndexRoute, IndexRedirect} from 'react-router';

import App from './containers/App';
import RegistrationPage from './containers/RegistrationPage';
import LoginPage from './containers/LoginPage';
import Users from './containers/Users';
import UserListPage from './containers/UserListPage';

export default (
    <Route path="/" component={App}>
        <IndexRedirect to="/users"/>
        <Route path="/users" component={Users}>
            <IndexRoute component={UserListPage}/>
        </Route>
        <Route path="registration" component={RegistrationPage}/>
        <Route path="login" component={LoginPage}/>
    </Route>
);
