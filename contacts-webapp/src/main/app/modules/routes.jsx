import React from 'react';
import {Route, IndexRoute, IndexRedirect} from 'react-router';

import App from './containers/App';
import RegistrationPage from './containers/RegistrationPage';
import LoginPage from './containers/LoginPage';
import Users from './containers/Users';
import UserListPage from './containers/UserListPage';
import UserViewPage from './containers/UserViewPage';
import UserCreateForm from './components/UserCreateForm';

export default (
    <Route path="/" component={App}>
        <IndexRedirect to="/users"/>
        <Route path="/users" component={Users}>
            <IndexRoute components={{list: UserListPage, form: UserCreateForm}}/>
            <Route path="view/:name" component={UserViewPage}/>
        </Route>
        <Route path="registration" component={RegistrationPage}/>
        <Route path="login" component={LoginPage}/>
    </Route>
);
