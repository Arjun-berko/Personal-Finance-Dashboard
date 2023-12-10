const express = require('express');
const router = express.Router();
const { addExpense, getAllExpenses, updateExpense, deleteExpense } = require('../controllers/expenseController');

// Create a new expense
router.post('/', addExpense);

// Get all expenses
router.get('/', getAllExpenses);

// Update a specific expense by ID
router.put('/:id', updateExpense);

// Delete a specific expense by ID
router.delete('/:id', deleteExpense);

module.exports = router;
