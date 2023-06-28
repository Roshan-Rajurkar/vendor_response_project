import React from 'react'
import './UserCard.css'
import Photo from '../userPhoto.jpg'

const UserCard = ({ user }) => (
    <div className="user-card">
        <div className="user-image">
            <img src={Photo} alt="User" />
        </div>
        <div className="user-details">
            <h3>{user['Name of company'] || 'N/A'}</h3>
            <p>Address: {user.Address || 'N/A'}</p>
            <p>Telephone number: {user['Telephone number'] || 'N/A'}</p>
            <p>Email address: {user['E-Mail address'] || 'N/A'}</p>
            <p>Occupation: {user['Types of business/Commodity service'] || 'N/A'}</p>
            <p>GST NO.: {user['GST NO.'] || 'N/A'}</p>
            <p>Location: {user.Location || 'N/A'}</p>
            {/* Add other fields as needed */}
        </div>
    </div>
);

export default UserCard;
