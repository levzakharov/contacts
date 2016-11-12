import React from 'react';
import UserProfile from '../components/UserProfile';

const propTypes = {
    params: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired
    }).isRequired
};

class UserViewPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            userLoaded: false
        };
    }

    componentWillMount() {
        // TODO: call fetch
        const {name} = this.props.params;
        this.setState({user: {name, displayName: 'Загрузка не реализована'}});
    }

    render() {
        return (
            <div>
                <h3>Пользователь {this.props.params.name}</h3>

                <UserProfile user={this.state.user}/>
            </div>
        );
    }

}

UserViewPage.propTypes = propTypes;

export default UserViewPage;
