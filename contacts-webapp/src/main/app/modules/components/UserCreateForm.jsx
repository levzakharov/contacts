import React from 'react';

import FormGroup from './form/FormGroup';

const UserCreateForm = () => {
    return (
        <form className="form-inline">
            <FormGroup id="name" type="text" placeholder="Name"/>
            <FormGroup id="fullName" type="text" placeholder="Full Name"/>

            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    );
};

export default UserCreateForm;
