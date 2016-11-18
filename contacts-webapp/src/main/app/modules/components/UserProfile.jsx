import React from 'react';

const propTypes = {
    user: React.PropTypes.shape({
        login: React.PropTypes.string.isRequired,
        fullName: React.PropTypes.string.isRequired,
        address: React.PropTypes.string.isRequired
    })
};

const defaultProps = {};

const UserProfile = ({user: {login, fullName, address}}) => (
    <div>
        <h2>Full Name: {fullName}</h2>
        <h3>login: {login}</h3>
        <h3>address: {address}</h3>
    </div>
);

UserProfile.propTypes = propTypes;
UserProfile.defaultProps = defaultProps;

export default UserProfile;