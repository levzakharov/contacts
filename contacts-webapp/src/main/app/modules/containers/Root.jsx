import React from 'react';
import {Router} from 'react-router';
import {browserHistory} from 'react-router';
import routes from '../routes';

const Root = () => (
    <Router history={browserHistory} routes={routes}/>
);

export default Root;
