import React from 'react';

const propTypes = {
    children: React.PropTypes.node.isRequired
};

const Users = ({children}) => (
    <div>
        <h2>Users</h2>

        {children}
    </div>
);

Users.propTypes = propTypes;

export default Users;
