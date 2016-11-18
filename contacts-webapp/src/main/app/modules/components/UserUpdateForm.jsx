import React from 'react';

import FormGroup from './form/FormGroup';

const propTypes = {
    user: React.PropTypes.shape({
        login: React.PropTypes.string.isRequired,
        fullName: React.PropTypes.string.isRequired,
        address: React.PropTypes.string.isRequired
    }),
    updateUser: React.PropTypes.func.isRequired
};

class UserUpdateForm extends React.Component {
    constructor(props) {
        super(props);

        const {login, fullName, address} = this.props.user;
        this.state = {login, fullName, address};

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
        this.props.updateUser({login, fullName, address});
    }

    render() {
        const {login, fullName, address} = this.state;

        return (
            <form className onSubmit={this.onSubmit}>
                <FormGroup id="login" type="text" placeholder="Login" value={login} isDisabled={Boolean(true)}/>
                <FormGroup id="fullName" type="text" placeholder="Full Name" value={fullName}
                           handleChange={this.handleFullNameChange}/>
                <FormGroup id="address" type="text" placeholder="Address" value={address}
                           handleChange={this.handleAddressChange}/>

                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        );
    }
}

UserUpdateForm.propTypes = propTypes;

export default UserUpdateForm;
