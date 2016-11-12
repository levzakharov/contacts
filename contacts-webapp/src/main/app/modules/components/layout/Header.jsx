import React from 'react';
import {Link} from 'react-router';

const propTypes = {};

const Header = () => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <Link to="/" activeClassName="navbar-brand">Contacts</Link>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/login">Sing In</Link></li>
                        <li><Link to="/registration">Sing Up</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

Header.propTypes = propTypes;

export default Header;