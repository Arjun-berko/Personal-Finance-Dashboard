const mongoose = require('mongoose');

// Define an array of allowed categories
const allowedCategories = ['Utilities', 'Groceries', 'Rent', 'Transportation', 'Entertainment', 'Healthcare', 'Savings', 'Other'];

const budgetSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: { 
        type: String, 
        required: true,
        enum: allowedCategories  // Add enum here
    },
    limit: { type: Number, required: true, min: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Budget', budgetSchema);
