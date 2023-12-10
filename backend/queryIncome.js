require('dotenv').config(); // This line should be at the top
const mongoose = require('mongoose');
const Income = require('./models/Income'); // Adjust the path as per your project structure

// Use the MongoDB Connection String from .env file
const dbConnection = process.env.MONGODB_URI;

mongoose.connect(dbConnection, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Query to get all incomes
const queryAllIncomes = async () => {
    try {
        const incomes = await Income.find();
        console.log('All Incomes:', incomes);
    } catch (err) {
        console.error('Error fetching incomes:', err);
    } finally {
        mongoose.disconnect();
    }
};

// Run the query function
queryAllIncomes();
