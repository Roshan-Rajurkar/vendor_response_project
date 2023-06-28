import React, { useState, useEffect } from 'react';
import './UserFilter.css';

const UserFilter = ({ users, setFilteredUsers }) => {
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedOccupation, setSelectedOccupation] = useState('');

    useEffect(() => {
        const filterUsers = () => {
            let filteredUsers = [...users];

            if (selectedCity && selectedCity !== "All Cities") {
                filteredUsers = filteredUsers.filter(
                    user => user['Location'] === selectedCity
                );
            }

            if (selectedOccupation && selectedOccupation !== "All Occupations") {
                filteredUsers = filteredUsers.filter(
                    user => user['Types of business/Commodity service'] === selectedOccupation
                );
            }

            setFilteredUsers(filteredUsers);
        };



        filterUsers();
    }, [selectedCity, selectedOccupation, users, setFilteredUsers]);



    return (
        <div className="user-filter">
            <h3>Filter Options</h3>
            <select value={selectedCity} onChange={e => setSelectedCity(e.target.value)}>
                <option value="">All Cities</option>
                {/* Add options for cities */}
                <option value="Chiplun">Chiplun</option>
                <option value="Pune">Pune</option>
                <option value="Ratnagiri">Ratnagiri</option>
                <option value="Satara">Satara</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Sangli">Sangli</option>
                <option value="Nashik">Nashik</option>
                <option value="Yavatmal">Yavatmal</option>
                <option value="Kolhapur">Kolhapur</option>
            </select>
            <select value={selectedOccupation} onChange={e => setSelectedOccupation(e.target.value)}>
                <option value="">All Occupations</option>
                {/* Add options for occupations */}
                <option value="RETAILER">RETAILER</option>
                <option value="Consultant">Consultant</option>
                <option value="Professional services">Professional services</option>
                <option value="Manufacturer">Manufacturer</option>
                <option value="Construction contractor">Construction contractor</option>
            </select>
        </div>
    );
};

export default UserFilter;
