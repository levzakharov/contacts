import React from 'react';

import FormGroup from './form/FormGroup';

const propTypes = {
    createUser: React.PropTypes.func.isRequired
};

class UserCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            fullName: '',
            address: ''
        };

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleFullNameChange = this.handleFullNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleLoginChange(login) {
        this.setState({login});
    }

    handleFullNameChange(fullName) {
        this.setState({fullName});
    }

    handleAddressChange(address) {
        this.setState({address});
    }

    onSubmit(e) {
        e.preventDefault();
        const {login, fullName, address} = this.state;
        this.props.createUser({login, fullName, address});
    }

    render() {
        return (
            <form className onSubmit={this.onSubmit}>
                <FormGroup id="login" type="text" placeholder="Login" handleChange={this.handleLoginChange}/>
                <FormGroup id="fullName" type="text" placeholder="Full Name" handleChange={this.handleFullNameChange}/>
                <FormGroup id="address" type="text" placeholder="Address" handleChange={this.handleAddressChange}/>

                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        );
    }
}

UserCreateForm.propTypes = propTypes;

export default UserCreateForm;
