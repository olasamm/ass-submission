import React from 'react';
import Navbar from '../../components/Navbar';

const UserManagement = () => {
    return (
        <div>
            <Navbar role="admin" />
            <div className="container mt-5">
                <h1>User Management</h1>
                <p>Here you can add, remove, or manage users (students and lecturers).</p>
            </div>
        </div>
    );
};

export default UserManagement;
