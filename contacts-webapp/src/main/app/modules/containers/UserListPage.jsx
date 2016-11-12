import React from 'react';
import UserList from '../components/UserList';

const propTypes = {};

class UserListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            usersLoaded: false
        };
    }

    componentWillMount() {
        // TODO: call fetch to load the list of users and set state.users
        this.setState({
            users: [
                {name: 'marat', displayName: 'Марат Гизатуллин'},
                {name: 'alexander', displayName: 'Александр Комаров'},
                {name: 'sergey', displayName: 'Сергей Миронов'}
            ],
            usersLoaded: true
        });
    }

    render() {
        const {users} = this.state;
        return (
            <div>
                <UserList users={users}/>
            </div>
        );
    }

}

UserListPage.propTypes = propTypes;

export default UserListPage;
