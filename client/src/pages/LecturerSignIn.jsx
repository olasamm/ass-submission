import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/SignUpSignIn.css'; // Import the CSS for centering

const LecturerSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:2000/api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
                setTimeout(() => navigate('/lecturer/dashboard'), 2000); // Redirect to lecturer dashboard
            } else {
                setMessage(data.message); // Display error message if credentials are invalid
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSignIn}>
                <div className="container mt-5">
                    <h1 className="text-center mb-4">Welcome to Sign In</h1>
                    <div className="card p-4 shadow">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control my-2"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                        />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control my-2"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                        />
                        <button type="submit" className="btn btn-primary w-100 mt-3">
                            Sign In
                        </button>
                        {message && <p className="text-center mt-3">{message}</p>}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LecturerSignIn;
