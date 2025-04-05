import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <button className="toggle-button btn btn-primary" onClick={toggleSidebar}>
                {isCollapsed ? 'Expand' : 'Collapse'}
            </button>
            <h5 className="mt-3">Quick Access</h5>
            <ul className="list-group">
                <li className="list-group-item"><a href="/assignments">My Assignments</a></li>
                <li className="list-group-item"><a href="/grades">Grades</a></li>
                <li className="list-group-item"><a href="/notifications">Notifications</a></li>
                <li className="list-group-item"><a href="/profile">Profile</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
