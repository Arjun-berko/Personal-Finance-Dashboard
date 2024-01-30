const mongoose = require('mongoose');

const allowedCategories = ['Utilities', 'Groceries', 'Rent', 'Transportation', 'Entertainment', 'Healthcare', 'Dining', 'Other'];
const allowedMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const budgetSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: { 
        type: String, 
        required: true,
        enum: allowedCategories
    },
    limit: { type: Number, required: true, min: 0 },
    month: { 
        type: String, 
        required: true,
        enum: allowedMonths // Use string values for months
    },
    year: { 
        type: Number, 
        required: true, 
        default: () => new Date().getFullYear() // Default to current year
    },
}, { timestamps: true });

// Compound index to ensure uniqueness for combination of user, category, month, and year
budgetSchema.index({ user: 1, category: 1, month: 1, year: 1 }, { unique: true });

module.exports = mongoose.model('Budget', budgetSchema);
