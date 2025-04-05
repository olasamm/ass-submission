import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import studentImage from '../assets/student.jpeg';
import lecturerImage from '../assets/lecturer.jpeg';
import gradingImage from '../assets/grading.jpg';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">School Portal</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="/"
                                    id="signupDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Sign Up
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="signupDropdown">
                                    <li>
                                        <button
                                            className="dropdown-item"
                                            onClick={() => navigate('/student/signup')}
                                        >
                                            Student Sign Up
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="dropdown-item"
                                            onClick={() => navigate('/lecturer/signup')}
                                        >
                                            Lecturer Sign Up
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Landing Page Content */}
            <div className="container text-center mt-5">
                <h1>Welcome to the School Portal</h1>
                <p className="lead">
                    A platform for students and lecturers to manage assignments, grades, and academic performance.
                </p>
                <div className="mt-4">
                    <button
                        className="btn btn-primary mx-2"
                        onClick={() => navigate('/student/signup')}
                    >
                        Student Sign Up
                    </button>
                    <button
                        className="btn btn-secondary mx-2"
                        onClick={() => navigate('/lecturer/signup')}
                    >
                        Lecturer Sign Up
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <div className="features-section container mt-5 text-center">
                <div className="row">
                    <div className="col-md-4">
                        <img src={studentImage} alt="Students" className="feature-image" />
                        <h3>For Students</h3>
                        <p>Submit assignments, view grades, and track your academic progress with ease.</p>
                    </div>
                    <div className="col-md-4">
                        <img src={lecturerImage} alt="Lecturers" className="feature-image" />
                        <h3>For Lecturers</h3>
                        <p>Manage assignments, grade submissions, and provide feedback to students.</p>
                    </div>
                    <div className="col-md-4">
                        <img src={gradingImage} alt="Grading System" className="feature-image" />
                        <h3>Grading System</h3>
                        <p>Automated grading and analytics to ensure fair and efficient evaluation.</p>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="how-it-works-section container mt-5 text-center">
                <h2>How It Works</h2>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <h4>Step 1</h4>
                        <p>Sign up as a student or lecturer to get started.</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Step 2</h4>
                        <p>Submit or manage assignments and track progress.</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Step 3</h4>
                        <p>Receive grades and feedback or analyze student performance.</p>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="testimonials-section container mt-5 text-center">
                <h2>What Our Users Say</h2>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <blockquote className="blockquote">
                            <p>"This platform has made managing assignments so much easier!"</p>
                            <footer className="blockquote-footer">A Happy Student</footer>
                        </blockquote>
                    </div>
                    <div className="col-md-6">
                        <blockquote className="blockquote">
                            <p>"Grading and providing feedback has never been this efficient."</p>
                            <footer className="blockquote-footer">A Satisfied Lecturer</footer>
                        </blockquote>
                    </div>
                </div>
            </div>

            {/* Contact Us Section */}
            <div className="contact-us-section container mt-5 text-center">
                <h2>Contact Us</h2>
                <p>
                    Have questions or need support? Reach out to us, and we'll be happy to assist you.
                </p>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <h4>Email</h4>
                        <p>gbadebosamuel23@gmail.com</p>
                    </div>
                    <div className="col-md-6">
                        <h4>Phone</h4>
                        <p>09061831487</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer bg-primary text-white text-center py-3 mt-5">
                <p>&copy; 2023 Gbadebo Samuel. All rights reserved.</p>
                <p>Contact us: WhatsApp: 07080916115</p>
            </footer>
        </div>
    );
};

export default LandingPage;
