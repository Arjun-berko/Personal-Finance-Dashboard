const express = require('express');
const router = express.Router();
const { addInvestment, getAllInvestments, updateInvestment, deleteInvestment } = require('../controllers/investmentController');

// Create a new investment
router.post('/', addInvestment);

// Get all investments
router.get('/', getAllInvestments);

// Update a specific investment by ID
router.put('/:id', updateInvestment);

// Delete a specific investment by ID
router.delete('/:id', deleteInvestment);

module.exports = router;
