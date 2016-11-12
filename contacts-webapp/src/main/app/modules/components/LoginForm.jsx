import React from 'react';

import FormGroup from './form/FormGroup';

const LoginForm = () => {
    return (
        <div className="col-md-4 col-md-offset-4">
            <form onSubmit={() => {
                alert('Submit!');
            }}>
                <h1>Login</h1>

                <FormGroup id="email" label="Email" type="email" placeholder="Email"/>
                <FormGroup id="password" label="Password" type="password" placeholder="Password"/>

                <button type="submit" className="btn btn-success btn-lg btn-block">Sign In</button>
            </form>
        </div>
    );
};

export default LoginForm;
