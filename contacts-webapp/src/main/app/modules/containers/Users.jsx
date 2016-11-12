import React from 'react';

const propTypes = {
    form: React.PropTypes.node.isRequired,
    list: React.PropTypes.node.isRequired
};

const Users = ({list, form}) => (
    <div>
        <h2>Users</h2>

        {form}
        {list}
    </div>
);

Users.propTypes = propTypes;

export default Users;
