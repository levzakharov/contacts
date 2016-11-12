import React from 'react';
import {Link} from 'react-router';

const propTypes = {
    users: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        fullName: React.PropTypes.string.isRequired
    })).isRequired
};

const UsersList = ({users}) => (
    <table className="table">
        <thead>
        <tr>
            <th>Name</th>
            <th>Full Name</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {users.map(({name, fullName}) => (
            <tr key={name}>
                <td>{name}</td>
                <td>{fullName}</td>
                <td>
                    <div className="btn-group" role="group">
                        <Link className="btn btn-primary btn-xs"
                              to={`/users/view/${encodeURIComponent(name)}`}>
                            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                        </Link>
                        <button className="btn btn-warning btn-xs" type="button">
                            <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                        </button>
                        <button className="btn btn-danger btn-xs" type="button">
                            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                        </button>
                    </div>
                </td>
            </tr>
        ))}
        </tbody>
    </table>
);

UsersList.propTypes = propTypes;

export default UsersList;
