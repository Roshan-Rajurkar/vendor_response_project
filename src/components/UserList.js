import React from 'react';
import './UserList.css';
import UserCard from './UserCard';

const UserList = ({ users }) => (
    <div className="user-list">
        {users.length > 0 ? (
            users.map((user, index) => (
                <UserCard key={index} user={user} />
            ))
        ) : (
            <p>No users available.</p>
        )}
    </div>
);

export default UserList;
