import React from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../actions/users';
import UserList from '../components/UserList';
import ModalWrapper from '../components/common/ModalWrapper';
import UserForm from '../components/UserForm';

const propTypes = {
    usersReducer: React.PropTypes.shape({
        isFetching: React.PropTypes.bool.isRequired,
        error: React.PropTypes.bool.isRequired,
        users: React.PropTypes.arrayOf(React.PropTypes.shape({
            login: React.PropTypes.string.isRequired,
            fullName: React.PropTypes.string.isRequired
        })).isRequired,
    }),
    getUsers: React.PropTypes.func.isRequired
};

class UserListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            usersLoaded: false,
            isUserCreateFormVisible: false
        };

        this.openUserCreateForm = this.openUserCreateForm.bind(this);
        this.closeUserCreateForm = this.closeUserCreateForm.bind(this);
    }

    componentDidMount() {
        this.props.getUsers();
    }

    openUserCreateForm() {
        this.setState({isUserCreateFormVisible: true});
    }

    closeUserCreateForm() {
        this.setState({isUserCreateFormVisible: false});
    }

    render() {
        const {isUserCreateFormVisible} = this.state;
        const {users} = this.props.usersReducer;

        return (
            <div>
                <button onClick={this.openUserCreateForm} className="btn btn-success">Create User</button>
                <ModalWrapper title="Create User" isVisible={isUserCreateFormVisible}
                              onClose={this.closeUserCreateForm}>
                    <UserForm/>
                </ModalWrapper>
                <UserList users={users}/>
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

UserListPage.propTypes = propTypes;

export default connect(mapStateToProps, {getUsers})(UserListPage);
