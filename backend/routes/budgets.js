const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');  // Import the auth middleware
const { addBudget, getAllBudgets, updateBudget, deleteBudget } = require('../controllers/budgetController');

// Create a new budget - Protected route
router.post('/', auth, addBudget);

// Get all budgets - Protected route
router.get('/', auth, getAllBudgets);

// Update a specific budget by ID - Protected route
router.put('/:id', auth, updateBudget);

// Delete a specific budget by ID - Protected route
router.delete('/:id', auth, deleteBudget);

module.exports = router;
