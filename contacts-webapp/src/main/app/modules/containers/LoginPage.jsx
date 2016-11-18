import React from 'react';
import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';
import {login} from '../actions/authentication';

const propTypes = {
    authentication: React.PropTypes.shape({
        errorMessage: React.PropTypes.string
    }),
    login: React.PropTypes.func.isRequired
};

const LoginPage = (props) => {
    const {errorMessage} = props.authentication;
    return (
        <div>
            {errorMessage &&
            <div className="alert alert-danger" role="alert">{errorMessage}</div>
            }
            <LoginForm onSubmit={props.login}/>
        </div>
    );
};

function mapStateToProps(state) {
    const {authentication} = state;
    return {
        authentication
    };
}

LoginPage.propTypes = propTypes;

export default connect(mapStateToProps, {login})(LoginPage);

