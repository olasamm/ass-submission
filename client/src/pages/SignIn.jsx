import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

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
                setTimeout(() => navigate('/dashboard'), 2000); // Redirect to dashboard after 2 seconds
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
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
    );
};

export default SignIn;
