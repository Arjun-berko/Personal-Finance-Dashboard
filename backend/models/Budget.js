// backend/models/Budget.js
const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: { type: String, required: true },
    limit: { type: Number, required: true, min: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Budget', budgetSchema);