import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './AdminPanel.css';

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [editUser, setEditUser] = useState(null);

    // Fetch all users
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const adminToken = localStorage.getItem('adminToken');
                const response = await fetch('http://localhost:2000/api/admin/users', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'admin-token': adminToken,
                    },
                });
                const data = await response.json();
                if (response.ok) {
                    setUsers(data.users);
                } else {
                    setMessage(data.message);
                }
            } catch (error) {
                setMessage('Failed to fetch users.');
            }
        };

        fetchUsers();
    }, []);

    // Edit a user
    const handleEditUser = async (e) => {
        e.preventDefault();
        try {
            const adminToken = localStorage.getItem('adminToken');
            const response = await fetch(`http://localhost:2000/api/admin/users/${editUser._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'admin-token': adminToken,
                },
                body: JSON.stringify(editUser),
            });
            const data = await response.json();
            if (response.ok) {
                setUsers(users.map((user) => (user._id === editUser._id ? data.user : user)));
                setMessage(data.message);
                setEditUser(null);
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            setMessage('Failed to update user.');
        }
    };

    // Delete a user
    const handleDelete = async (userId) => {
        try {
            const adminToken = localStorage.getItem('adminToken');
            const response = await fetch(`http://localhost:2000/api/admin/users/${userId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json', 'admin-token': adminToken },
            });
            const data = await response.json();
            if (response.ok) {
                setUsers(users.filter((user) => user._id !== userId));
                setMessage(data.message);
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            setMessage('Failed to delete user.');
        }
    };

    return (
        <div>
            <Navbar role="admin" />
            <div className="container mt-5">
                <h1>Admin Panel</h1>
                {message && <p className="text-danger">{message}</p>}

                {/* Edit User Modal */}
                {editUser && (
                    <div className="modal">
                        <div className="modal-content">
                            <h3>Edit User</h3>
                            <form onSubmit={handleEditUser}>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={editUser.name}
                                    onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                                    className="form-control my-2"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={editUser.username}
                                    onChange={(e) => setEditUser({ ...editUser, username: e.target.value })}
                                    className="form-control my-2"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    value={editUser.phone}
                                    onChange={(e) => setEditUser({ ...editUser, phone: e.target.value })}
                                    className="form-control my-2"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={editUser.email}
                                    onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                                    className="form-control my-2"
                                    required
                                />
                                <button type="submit" className="btn btn-primary">Save Changes</button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setEditUser(null)}
                                >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {/* Users Table */}
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <button
                                        className="btn btn-primary btn-sm me-2"
                                        onClick={() => setEditUser(user)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(user._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPanel;
