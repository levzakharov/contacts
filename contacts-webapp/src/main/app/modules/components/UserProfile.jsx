import React from 'react';

const propTypes = {
    user: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        displayName: React.PropTypes.string.isRequired
    })
};

const defaultProps = {};

const UserProfile = ({user: {name, displayName}}) => (
    <div>
        {name} - {displayName}
    </div>
);

UserProfile.propTypes = propTypes;
UserProfile.defaultProps = defaultProps;

export default UserProfile;