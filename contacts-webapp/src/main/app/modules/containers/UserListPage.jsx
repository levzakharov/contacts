import React from 'react';

import UserList from '../components/UserList';
import ModalWrapper from '../components/common/ModalWrapper';
import UserCreateForm from '../components/UserCreateForm';

const propTypes = {};

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

    componentWillMount() {
        // TODO: call fetch to load the list of users and set state.users
        this.setState({
            users: [
                {login: 'marat', fullName: 'Марат Гизатуллин'},
                {login: 'alexander', fullName: 'Александр Комаров'},
                {login: 'sergey', fullName: 'Сергей Миронов'}
            ],
            usersLoaded: true
        });
    }

    openUserCreateForm() {
        this.setState({isUserCreateFormVisible: true});
    }

    closeUserCreateForm() {
        this.setState({isUserCreateFormVisible: false});
    }

    render() {
        const {users, isUserCreateFormVisible} = this.state;

        return (
            <div>
                <button onClick={this.openUserCreateForm} className="btn btn-success">Create User</button>
                <ModalWrapper title="Create User" isVisible={isUserCreateFormVisible}
                              onClose={this.closeUserCreateForm}>
                    <UserCreateForm/>
                </ModalWrapper>
                <UserList users={users}/>
            </div>
        );
    }

}

UserListPage.propTypes = propTypes;

export default UserListPage;
