import React from 'react';

const propTypes = {
    user: React.PropTypes.shape({
        login: React.PropTypes.string.isRequired,
        fullName: React.PropTypes.string.isRequired
    })
};

const defaultProps = {};

const UserProfile = ({user: {login, fullName}}) => (
    <div>
        {login} - {fullName}
    </div>
);

UserProfile.propTypes = propTypes;
UserProfile.defaultProps = defaultProps;

export default UserProfile;