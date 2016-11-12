import React from 'react';
import {Link} from 'react-router';

const propTypes = {
    users: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        displayName: React.PropTypes.string.isRequired
    })).isRequired
};

const UsersList = ({users}) => (
    <table className="table">
        <thead>
        <tr>
            <th>Имя</th>
            <th>Полное имя</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {users.map(({name, displayName}) => (
            <tr key={name}>
                <td>{name}</td>
                <td>{displayName}</td>
                <td>
                    <div className="btn-group" role="group">
                        <Link className="btn btn-primary btn-xs"
                              to={`/users/view/${encodeURIComponent(name)}`}>
                            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                        </Link>
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
