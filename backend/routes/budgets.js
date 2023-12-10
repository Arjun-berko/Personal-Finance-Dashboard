const express = require('express');
const router = express.Router();
const { addBudget, getAllBudgets, updateBudget, deleteBudget } = require('../controllers/budgetController');

// Create a new budget
router.post('/', addBudget);

// Get all budgets
router.get('/', getAllBudgets);

// Update a specific budget by ID
router.put('/:id', updateBudget);

// Delete a specific budget by ID
router.delete('/:id', deleteBudget);

module.exports = router;
