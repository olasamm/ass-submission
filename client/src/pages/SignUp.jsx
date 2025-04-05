import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            if (!formData.name || !formData.username || !formData.phone || !formData.email || !formData.password || !formData.confirmPassword) {
                setMessage('All fields are required.');
                return;
            }

            const response = await fetch('http://localhost:2000/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
                setTimeout(() => navigate('/signin'), 2000); // Redirect to sign-in page after 2 seconds
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            console.error('Error during signup:', error);
            setMessage('An error occurred. Please check your connection and try again.');
        }
    };

    return (
        <form onSubmit={handleSignUp}>
            <div className="container mt-5">
                <h1 className="text-center mb-4">Welcome to Signup</h1>
                <div className="card p-4 shadow">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control my-2"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control my-2"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control my-2"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        id="phone"
                        name="phone"
                        className="form-control my-2"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control my-2"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="form-control my-2"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    <button type="submit" className="btn btn-primary w-100 mt-3">
                        Sign Up
                    </button>
                    {message && <p className="text-center mt-3">{message}</p>}
                </div>
            </div>
        </form>
    );
};

export default SignUp;
