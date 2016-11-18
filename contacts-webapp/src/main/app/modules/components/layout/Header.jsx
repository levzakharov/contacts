import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/authentication';
import {Link} from 'react-router';

const propTypes = {
    authentication: React.PropTypes.shape({
        isAuthenticated: React.PropTypes.bool.isRequired
    }),
    logout: React.PropTypes.func.isRequired
};

const Header = (props) => {
    let navbar;
    if (!props.authentication.isAuthenticated) {
        navbar = (
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/login">Sing In</Link></li>
                <li><Link to="/registration">Sing Up</Link></li>
            </ul>
        );
    } else {
        navbar = (
            <ul className="nav navbar-nav navbar-right">
                <li onClick={props.logout}><Link to="/login">Logout</Link></li>
            </ul>
        );
    }

    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <Link to="/" activeClassName="navbar-brand">Contacts</Link>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    {navbar}
                </div>
            </div>
        </nav>
    );
};

function mapStateToProps(state) {
    const {authentication} = state;
    return {
        authentication
    };
}

Header.propTypes = propTypes;

export default connect(mapStateToProps, {logout})(Header);