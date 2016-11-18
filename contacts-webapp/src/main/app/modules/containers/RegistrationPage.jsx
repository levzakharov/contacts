import React from 'react';
import {connect} from 'react-redux';
import RegistrationForm from '../components/RegistrationForm';
import {register} from '../actions/registration';

const propTypes = {
    registration: React.PropTypes.shape({
        errorMessage: React.PropTypes.string
    }),
    register: React.PropTypes.func.isRequired
};

const RegistrationPage = (props) => {
    const {registration: {errorMessage}} = props;
    return (
        <div>
            {errorMessage &&
            <div className="alert alert-danger" role="alert">{errorMessage}</div>
            }
            <RegistrationForm onSubmit={props.register}/>
        </div>
    );
};

function mapStateToProps(state) {
    const {registration} = state;
    return {
        registration
    };
}

RegistrationPage.propTypes = propTypes;

export default connect(mapStateToProps, {register})(RegistrationPage);