const Expense = require('../models/Expense'); // Ensure this path is correct

exports.addExpense = async (req, res) => {
    try {
        const { user, description, amount, date, category } = req.body;
        let expense = new Expense({ user, description, amount, date, category });
        await expense.save();
        res.status(201).json(expense);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.updateExpense = async (req, res) => {
    try {
        const { description, amount, date, category } = req.body;
        let expense = await Expense.findById(req.params.id);
        if (!expense) {
            return res.status(404).json({ msg: 'Expense not found' });
        }
        expense.description = description || expense.description;
        expense.amount = amount || expense.amount;
        expense.date = date || expense.date;
        expense.category = category || expense.category;
        await expense.save();
        res.json(expense);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.deleteExpense = async (req, res) => {
    try {
        let expense = await Expense.findById(req.params.id);
        if (!expense) {
            return res.status(404).json({ msg: 'Expense not found' });
        }
        await expense.remove();
        res.json({ msg: 'Expense removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
