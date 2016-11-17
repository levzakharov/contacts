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
        {login} - {fullName} - {address}
    </div>
);

UserProfile.propTypes = propTypes;
UserProfile.defaultProps = defaultProps;

export default UserProfile;