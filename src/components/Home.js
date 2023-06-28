import React, { useEffect, useState } from 'react';
import UserFilter from './UserFilter';
import UserList from './UserList';
import { read, utils } from 'xlsx';

import './Home.css';

const Home = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(userData[0]);
    }, [userData]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        setLoading(true); // Set loading to true when starting file processing

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = read(data, { type: 'array' });

            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];

            const jsonData = utils.sheet_to_json(worksheet, { header: 1 });
            const headerRow = jsonData[0];

            const users = jsonData.slice(1).map((row) => {
                const user = {};

                row.forEach((cellValue, columnIndex) => {
                    const header = headerRow[columnIndex];
                    user[header] = cellValue;
                });

                return user;
            });

            setUserData(users);
            setLoading(false); // Set loading to false after processing is complete
        };

        reader.readAsArrayBuffer(file);
    };

    return (
        <div className="home-container">
            <div className='uploadInp'>
                <label htmlFor="inpFile"><strong>Upload Your Excel File</strong></label>
                <input type="file" accept=".xlsx" name='inpFile' onChange={handleFileUpload} />
            </div>

            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className='userdata__container'>
                    <UserFilter users={userData} setFilteredUsers={setUserData} />
                    <UserList users={userData} />
                </div>
            )}
        </div>
    );
};

export default Home;
