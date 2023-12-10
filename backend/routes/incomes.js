const express = require('express');
const router = express.Router();
const { addIncome, getAllIncomes, updateIncome, deleteIncome } = require('../controllers/incomeController');

// Create a new income
router.post('/', addIncome);

// Get all incomes
router.get('/', getAllIncomes);

// Update a specific income by ID
router.put('/:id', updateIncome);

// Delete a specific income by ID
router.delete('/:id', deleteIncome);

module.exports = router;
