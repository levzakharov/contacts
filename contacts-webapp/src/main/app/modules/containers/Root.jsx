import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import {browserHistory} from 'react-router';
import {getRoutes} from '../routes';

const propTypes = {
    store: React.PropTypes.object.isRequired
};

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={browserHistory} routes={getRoutes(store)}/>
    </Provider>
);

Root.propTypes = propTypes;

export default Root;
