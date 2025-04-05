import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const StudentDashboard = () => {
    return (
        <div>
            <Navbar role="student" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar role="student" />
                    </div>
                    <div className="col-md-9">
                        <h1 className="mt-4">Student Dashboard</h1>
                        <p>Welcome to your dashboard. Here you can view assignments, grades, and notifications.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
