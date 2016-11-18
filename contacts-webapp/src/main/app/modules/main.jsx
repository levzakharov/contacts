import '../styles/main.css';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const RootContainer = require('./containers/Root').default;
        ReactDOM.render(
            <RootContainer/>,
            document.getElementById('app')
        );
    });
}
