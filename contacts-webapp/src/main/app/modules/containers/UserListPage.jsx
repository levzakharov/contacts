import React from 'react';
import {connect} from 'react-redux';
import {createUser, getUsers, deleteUser} from '../actions/users';
import UserList from '../components/UserList';
import ModalWrapper from '../components/common/ModalWrapper';
import UserCreateForm from '../components/UserCreateForm';

const propTypes = {
    authentication: React.PropTypes.shape({
        token: React.PropTypes.string.isRequired
    }),
    usersReducer: React.PropTypes.shape({
        isFetching: React.PropTypes.bool.isRequired,
        error: React.PropTypes.bool.isRequired,
        users: React.PropTypes.arrayOf(React.PropTypes.shape({
            login: React.PropTypes.string.isRequired,
            fullName: React.PropTypes.string.isRequired,
            address: React.PropTypes.string.isRequired
        })).isRequired,
    }),
    createUser: React.PropTypes.func.isRequired,
    getUsers: React.PropTypes.func.isRequired,
    deleteUser: React.PropTypes.func.isRequired
};

class UserListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            usersLoaded: false,
            isUserCreateFormVisible: false,
        };

        this.createUser = this.createUser.bind(this);
        this.openUserCreateForm = this.openUserCreateForm.bind(this);
        this.closeUserCreateForm = this.closeUserCreateForm.bind(this);
    }

    componentDidMount() {
        const {token} = this.props.authentication;
        this.props.getUsers(token);
        this.interval = setInterval(() => this.props.getUsers(token), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    createUser(user) {
        const {token} = this.props.authentication;
        this.props.createUser(token, user);
        this.closeUserCreateForm();
    }

    openUserCreateForm() {
        this.setState({isUserCreateFormVisible: true});
    }

    closeUserCreateForm() {
        this.setState({isUserCreateFormVisible: false});
    }

    render() {
        const {isUserCreateFormVisible} = this.state;
        const {token} = this.props.authentication;
        const {error, users} = this.props.usersReducer;

        return (
            <div>
                {error && <div className="alert alert-danger" role="alert">Error fetching users</div>}
                <button onClick={this.openUserCreateForm} className="btn btn-success">Create User</button>
                {/*{isFetching && <p>Loading...</p>}*/}
                <ModalWrapper title="Create User" isVisible={isUserCreateFormVisible}
                              onClose={this.closeUserCreateForm}>
                    <UserCreateForm createUser={this.createUser}/>
                </ModalWrapper>
                <UserList token={token} users={users} deleteUser={this.props.deleteUser}/>
            </div>
        );
    }

}

function mapStateToProps(state) {
    const {authentication, usersReducer} = state;
    return {
        authentication,
        usersReducer
    };
}

UserListPage.propTypes = propTypes;

export default connect(mapStateToProps, {createUser, getUsers, deleteUser})(UserListPage);
