const Budget = require('../models/Budget'); // Ensure this path is correct

exports.addBudget = async (req, res) => {
    try {
        const { category, limit } = req.body;
        let budget = new Budget({ category, limit });
        await budget.save();
        res.status(201).json(budget);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getAllBudgets = async (req, res) => {
    try {
        const budgets = await Budget.find();
        res.json(budgets);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.updateBudget = async (req, res) => {
    try {
        const { category, limit } = req.body;
        let budget = await Budget.findById(req.params.id);
        if (!budget) {
            return res.status(404).json({ msg: 'Budget not found' });
        }
        budget.category = category || budget.category;
        budget.limit = limit || budget.limit;
        await budget.save();
        res.json(budget);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.deleteBudget = async (req, res) => {
    try {
        let budget = await Budget.findById(req.params.id);
        if (!budget) {
            return res.status(404).json({ msg: 'Budget not found' });
        }
        await budget.remove();
        res.json({ msg: 'Budget removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
