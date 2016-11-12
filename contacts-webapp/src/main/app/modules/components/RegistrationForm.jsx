import React from 'react';

import FormGroup from './form/FormGroup';

const RegistrationForm = () => {
    return (
        <div className="col-md-4 col-md-offset-4">
            <form onSubmit={() => {
                alert('Submit!');
            }}>
                <h1>Registration</h1>

                <FormGroup id="email" label="Email" type="email" placeholder="Email"/>
                <FormGroup id="password" label="Password" type="password" placeholder="Password"/>

                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign Up</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
