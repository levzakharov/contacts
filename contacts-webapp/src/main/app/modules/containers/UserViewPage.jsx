import React from 'react';
import {connect} from 'react-redux';
import {getUser} from '../actions/users';
import UserProfile from '../components/UserProfile';

const propTypes = {
    params: React.PropTypes.shape({
        login: React.PropTypes.string.isRequired
    }).isRequired,
    usersReducer: React.PropTypes.shape({
        isFetching: React.PropTypes.bool.isRequired,
        error: React.PropTypes.bool.isRequired,
        user: React.PropTypes.shape({
            login: React.PropTypes.string.isRequired,
            fullName: React.PropTypes.string.isRequired
        }).isRequired,
    }),
    getUser: React.PropTypes.func.isRequired
};

class UserViewPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const login = this.props.params.login;
        this.props.getUser(login);
    }

    render() {
        const {user} = this.props.usersReducer;

        return (
            <div>
                <h3>Пользователь {this.props.params.login}</h3>

                <UserProfile user={user}/>
            </div>
        );
    }

}

function mapStateToProps(state) {
    const {usersReducer} = state;
    return {
        usersReducer
    };
}

UserViewPage.propTypes = propTypes;

export default connect(mapStateToProps, {getUser})(UserViewPage);
