import React from 'react';
import {Link} from 'react-router';

import FormGroup from '../form/FormGroup';

const propTypes = {};

const Header = () => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                            aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/" activeClassName="navbar-brand">Contacts</Link>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <form className="navbar-form navbar-right">
                        <FormGroup id="email" type="email" placeholder="Email"/>
                        <FormGroup id="password" type="password" placeholder="Password"/>

                        <button type="submit" className="btn btn-success">Sign In</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

Header.propTypes = propTypes;

export default Header;