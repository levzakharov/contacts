import React from 'react';

import FormGroup from './form/FormGroup';

const propTypes = {
    login: React.PropTypes.string,
    fullName: React.PropTypes.string
};

const UserForm = ({login, fullName}) => {
    console.log(login);
    return (
        <form className>
            <FormGroup id="login" type="text" placeholder="Login" value={login}/>
            <FormGroup id="fullName" type="text" placeholder="Full Name" value={fullName}/>

            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    );
};

UserForm.propTypes = propTypes;

export default UserForm;
