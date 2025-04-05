const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
dotenv.config(); // Ensure dotenv is configured before using environment variables
const app = express();
const User = require('./models/userModel'); 

// Middleware
app.use(cors()); // Ensure CORS is enabled
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// MongoDB connection
const mongoURI = process.env.uri;
mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit the process if the database connection fails
    });

// Food route
const diffFood = [
    {
        id: 1,
        name: "Burger",
        price: 100,
    },
    {
        id: 2,
        name: "Pizza",
        price: 200,
    },
    {
        id: 3,
        name: "Pasta",
        price: 150,
    },
    {
        id: 4,
        name: "Salad",
        price: 50,
    },
];

app.get('/api', (req, res) => {
    res.send(diffFood);
});

// POST route to add a user
app.post('/api/users', async (req, res) => {
  try {
    const { name, email, password } = req.body; // Adjust fields as per your schema
    const newUser = new User({ name, email, username, password, confirmpassword: password }); // Assuming confirmpassword is the same as password for simplicity
    // Check if user already exists
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000; // Replace with your desired port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

