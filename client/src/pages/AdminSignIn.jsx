import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/SignUpSignIn.css'; // Import the CSS for centering

const AdminSignIn = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:2000/api/admin/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('adminToken', data.token); // Store the token in localStorage
                navigate('/admin'); // Redirect to admin panel
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSignIn}>
                <h1 className="text-center mb-4">Admin Sign In</h1>
                <div className="card p-4 shadow">
                    <input
                        type="text"
                        name="username"
                        placeholder="Admin Username"
                        className="form-control my-2"
                        value={formData.username}
                        onChange={handleChange}
                        autoComplete="username"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Admin Password"
                        className="form-control my-2"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                    />
                    <button type="submit" className="btn btn-primary w-100 mt-3">
                        Sign In
                    </button>
                    {message && <p className="text-danger text-center mt-3">{message}</p>}
                </div>
            </form>
        </div>
    );
};

export default AdminSignIn;
