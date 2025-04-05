import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Grades = () => {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h1 className="mt-4">Grades</h1>
                        <p>Here you can view your grades and feedback.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grades;
