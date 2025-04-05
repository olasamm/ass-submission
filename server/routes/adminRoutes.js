const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

// Middleware to verify admin access
const verifyAdmin = (req, res, next) => {
    const adminToken = req.headers['admin-token'];
    if (adminToken === process.env.ADMIN_TOKEN) {
        next();
    } else {
        res.status(403).json({ message: 'Access denied' });
    }
};

// Get all users
router.get('/users', verifyAdmin, async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch users', error });
    }
});

// Add a new user
router.post('/users', verifyAdmin, async (req, res) => {
    const { name, username, phone, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            username,
            phone,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: 'User added successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add user', error });
    }
});

// Edit a user
router.put('/users/:id', verifyAdmin, async (req, res) => {
    const { name, username, phone, email } = req.body;

    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { name, username, phone, email },
            { new: true }
        );
        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update user', error });
    }
});

// Delete a user
router.delete('/users/:id', verifyAdmin, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete user', error });
    }
});

// Restrict a user
router.patch('/users/restrict/:id', verifyAdmin, async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { restricted: true }, { new: true });
        res.status(200).json({ message: 'User restricted successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Failed to restrict user', error });
    }
});

module.exports = router;
