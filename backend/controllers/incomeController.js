const Income = require('../models/Income'); // Ensure this path is correct

exports.addIncome = async (req, res) => {
    try {
        const { user, source, amount, date } = req.body;
        let income = new Income({ user, source, amount, date });
        await income.save();
        res.status(201).json(income);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getAllIncomes = async (req, res) => {
    try {
        const incomes = await Income.find();
        res.json(incomes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.updateIncome = async (req, res) => {
    try {
        const { source, amount, date } = req.body;
        let income = await Income.findById(req.params.id);
        if (!income) {
            return res.status(404).json({ msg: 'Income not found' });
        }
        income.source = source || income.source;
        income.amount = amount || income.amount;
        income.date = date || income.date;
        await income.save();
        res.json(income);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.deleteIncome = async (req, res) => {
    try {
        let income = await Income.findById(req.params.id);
        if (!income) {
            return res.status(404).json({ msg: 'Income not found' });
        }
        await income.remove();
        res.json({ msg: 'Income removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
