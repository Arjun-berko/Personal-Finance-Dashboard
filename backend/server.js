require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db'); // Import the database connection function

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors()); // Use cors middleware for cross-origin requests
app.use(express.json()); // Parse JSON bodies

// Basic Route for testing
app.get('/', (req, res) => {
    res.send('Hello, your server is up and running!');
});

// Server Port
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
