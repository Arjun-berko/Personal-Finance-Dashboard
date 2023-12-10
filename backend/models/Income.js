const mongoose = require('mongoose');

// Define an array of allowed income sources
const allowedSources = ['Salary', 'Business', 'Investments', 'Gifts', 'Other'];

const incomeSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    source: { 
        type: String, 
        required: true,
        enum: allowedSources // Add enum here
    },
    amount: { type: Number, required: true, min: 0 },
    date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Income', incomeSchema);
