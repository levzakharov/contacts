import React from 'react';

import FormGroup from './form/FormGroup';

const propTypes = {
    onSubmit: React.PropTypes.func.isRequired
};

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUsernameChange(username) {
        this.setState({username});
    }

    handlePasswordChange(password) {
        this.setState({password});
    }


    handleFormSubmit(e) {
        e.preventDefault();
        const {username, password} = this.state;
        this.props.onSubmit(username, password);
    }

    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <form onSubmit={this.handleFormSubmit}>
                    <h1>Login</h1>

                    <FormGroup id="username" label="Username" type="text" placeholder="Username"
                               handleChange={this.handleUsernameChange}/>
                    <FormGroup id="password" label="Password" type="password" placeholder="Password"
                               handleChange={this.handlePasswordChange}/>

                    <button type="submit" className="btn btn-success btn-lg btn-block">Sign In</button>
                </form>
            </div>
        );
    }
}

LoginForm.propTypes = propTypes;

export default LoginForm;

