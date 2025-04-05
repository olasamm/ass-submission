import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-lg-3 col-md-4 d-none d-md-block">
                        <Sidebar />
                    </div>
                    {/* Main Content */}
                    <div className="col-lg-9 col-md-8">
                        <div className="main-content p-4">
                            <h1 className="mt-4 text-primary">Welcome to the Dashboard</h1>
                            <p className="lead">Select an option from the sidebar or navigation menu to get started.</p>
                            <div className="card shadow-sm p-4">
                                <h5>Announcements</h5>
                                <p>No new announcements at the moment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
