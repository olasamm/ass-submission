import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const PendingSubmissions = () => {
    return (
        <div>
            <Navbar role="lecturer" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar role="lecturer" />
                    </div>
                    <div className="col-md-9">
                        <h1 className="mt-4">Pending Submissions</h1>
                        <p>List of assignments awaiting grading will appear here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PendingSubmissions;
