import React from 'react';
import './Navbar.css';

const Navbar = ({ role }) => {
    const links = {
        student: [
            { path: '/student/dashboard', label: 'Dashboard' },
            { path: '/assignments', label: 'Assignments' },
            { path: '/grades', label: 'Grades' },
        ],
        lecturer: [
            { path: '/lecturer/dashboard', label: 'Dashboard' },
            { path: '/assignments', label: 'Manage Assignments' },
            { path: '/grades', label: 'Manage Grades' },
        ],
        admin: [
            { path: '/admin', label: 'Admin Panel' },
        ],
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">School Portal</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {links[role]?.map((link) => (
                            <li className="nav-item" key={link.path}>
                                <a className="nav-link" href={link.path}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
