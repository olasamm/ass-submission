import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const GradedAssignments = () => {
    return (
        <div>
            <Navbar role="lecturer" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar role="lecturer" />
                    </div>
                    <div className="col-md-9">
                        <h1 className="mt-4">Graded Assignments</h1>
                        <p>Previously graded assignments will appear here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GradedAssignments;
