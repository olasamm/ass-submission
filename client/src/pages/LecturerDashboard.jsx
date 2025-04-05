import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const LecturerDashboard = () => {
    return (
        <div>
            <Navbar role="lecturer" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar role="lecturer" />
                    </div>
                    <div className="col-md-9">
                        <h1 className="mt-4">Lecturer Dashboard</h1>
                        <p>Welcome to your dashboard. Here you can manage assignments, grades, and student performance.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LecturerDashboard;
