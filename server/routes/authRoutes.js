const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/userModel'); // Adjust this path if necessary

// Sign-in route
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Respond with success
        res.status(200).json({ message: 'Sign-in successful', user });
    } catch (error) {
        console.error('Sign-in error:', error);
        res.status(500).json({ message: 'Server error', error });
    }
});

// Sign-up route
router.post('/signup', async (req, res) => {
    const { name, username, phone, email, password, confirmPassword } = req.body;

    try {
        // Validate input
        if (!name || !username || !phone || !email || !password || !confirmPassword) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            name,
            username,
            phone,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Sign-up error:', error);
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
