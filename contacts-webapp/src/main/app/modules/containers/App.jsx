import React from 'react';

const propTypes = {
    children: React.PropTypes.node.isRequired
};

const App = ({children}) => (
    <div>
        <h1>Hi!</h1>
        <div className="container">
            {children}
        </div>
    </div>
);

App.propTypes = propTypes;

export default App;
