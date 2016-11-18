import React from 'react';
import {connect} from 'react-redux';
import {getUser, updateUser} from '../actions/users';
import UserProfile from '../components/UserProfile';
import ModalWrapper from '../components/common/ModalWrapper';
import UserUpdateForm from '../components/UserUpdateForm';

const propTypes = {
    params: React.PropTypes.shape({
        login: React.PropTypes.string.isRequired
    }).isRequired,
    usersReducer: React.PropTypes.shape({
        isFetching: React.PropTypes.bool.isRequired,
        error: React.PropTypes.bool.isRequired,
        user: React.PropTypes.shape({
            login: React.PropTypes.string.isRequired,
            fullName: React.PropTypes.string.isRequired,
            address: React.PropTypes.string.isRequired
        }).isRequired,
    }),
    getUser: React.PropTypes.func.isRequired,
    updateUser: React.PropTypes.func.isRequired
};

class UserViewPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isUserUpdateFormVisible: false
        };

        this.updateUser = this.updateUser.bind(this);
        this.openUserUpdateForm = this.openUserUpdateForm.bind(this);
        this.closeUserUpdateForm = this.closeUserUpdateForm.bind(this);
    }

    componentDidMount() {
        const login = this.props.params.login;
        this.props.getUser(login);
    }

    openUserUpdateForm() {
        this.setState({isUserUpdateFormVisible: true});
    }

    closeUserUpdateForm() {
        this.setState({isUserUpdateFormVisible: false});
    }

    updateUser(user) {
        this.props.updateUser(user);
        this.closeUserUpdateForm();
    }

    render() {
        const {isUserUpdateFormVisible} = this.state;
        const {user} = this.props.usersReducer;

        return (
            <div>
                <h3>Пользователь {this.props.params.login}</h3>
                <button onClick={this.openUserUpdateForm} className="btn btn-warning" type="button">
                    Edit <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                </button>
                <ModalWrapper title="Update User" isVisible={isUserUpdateFormVisible}
                              onClose={this.closeUserUpdateForm}>
                    <UserUpdateForm user={user} updateUser={this.updateUser}/>
                </ModalWrapper>

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

export default connect(mapStateToProps, {getUser, updateUser})(UserViewPage);
