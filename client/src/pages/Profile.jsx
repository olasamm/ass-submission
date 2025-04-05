import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Profile = () => {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h1 className="mt-4">Profile</h1>
                        <p>Here you can view and edit your profile.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
