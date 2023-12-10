require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet'); // Security middleware
const morgan = require('morgan'); // Logging middleware
const connectDB = require('./db'); // Import the database connection function

// Import routes
const userRoutes = require('./routes/users');
const expenseRoutes = require('./routes/expenses');
const incomeRoutes = require('./routes/incomes');
const investmentRoutes = require('./routes/investments');
const budgetRoutes = require('./routes/budgets');

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors()); // Use cors middleware for cross-origin requests
app.use(helmet());
app.use(express.json()); // Parse JSON bodies
app.use(morgan('tiny')); // Simple logging

// Basic Route for testing
app.get('/', (req, res) => {
    res.send('Hello, your server is up and running!');
});

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/incomes', incomeRoutes);
app.use('/api/investments', investmentRoutes);
app.use('/api/budgets', budgetRoutes);

// Catch-all route for undefined routes
app.use('*', (req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

// Server Port
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
