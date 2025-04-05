import React from 'react';
import Navbar from '../../components/Navbar';

const SystemSettings = () => {
    return (
        <div>
            <Navbar role="admin" />
            <div className="container mt-5">
                <h1>System Settings</h1>
                <p>Configure deadlines, assignment rules, and other system settings here.</p>
            </div>
        </div>
    );
};

export default SystemSettings;
