import React from 'react';

import FormGroup from './form/FormGroup';

const propTypes = {
    createUser: React.PropTypes.func.isRequired
};

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            fullName: ''
        };

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleFullNameChange = this.handleFullNameChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleLoginChange(login) {
        this.setState({login});
    }

    handleFullNameChange(fullName) {
        this.setState({fullName});
    }

    onSubmit(e) {
        e.preventDefault();
        const {login, fullName} = this.state;
        this.props.createUser({login, fullName});
    }

    render() {
        return (
            <form className onSubmit={this.onSubmit}>
                <FormGroup id="login" type="text" placeholder="Login" handleChange={this.handleLoginChange}/>
                <FormGroup id="fullName" type="text" placeholder="Full Name" handleChange={this.handleFullNameChange}/>

                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        );
    }
}

UserForm.propTypes = propTypes;

export default UserForm;
