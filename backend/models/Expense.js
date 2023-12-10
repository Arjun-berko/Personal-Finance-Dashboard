const mongoose = require('mongoose');

// Define an array of allowed expense categories
const allowedExpenseCategories = [
    'Groceries', 'Utilities', 'Rent', 'Transportation', 
    'Entertainment', 'Healthcare', 'Dining', 'Other'
];

const expenseSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    description: { type: String, required: true },
    amount: { type: Number, required: true, min: 0 },
    date: { type: Date, default: Date.now },
    category: { 
        type: String, 
        required: true,
        enum: allowedExpenseCategories // Enum for category
    },
}, { timestamps: true });

module.exports = mongoose.model('Expense', expenseSchema);
