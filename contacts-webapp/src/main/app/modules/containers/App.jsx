import React from 'react';

import Header from '../components/layout/Header';

const propTypes = {
    children: React.PropTypes.node.isRequired
};

const App = ({children}) => (
    <div>
        <Header/>
        <div className="container">
            {children}
        </div>
    </div>
);

App.propTypes = propTypes;

export default App;
