import '../styles/main.scss';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';

ReactDOM.render(
    <Root/>,
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
