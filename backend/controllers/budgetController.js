const Budget = require('../models/Budget'); // Ensure this path is correct

exports.addBudget = async (req, res) => {
    try {
        const { category, limit, month, year } = req.body;
        const budget = new Budget({ 
            user: req.user.user.id, // Associate budget with logged-in user
            category, 
            limit,
            month,
            year
        });
        await budget.save();
        res.status(201).json(budget);
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ msg: 'A budget for this category, month, and year already exists.' });
        }
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getAllBudgets = async (req, res) => {
    try {
        const budgets = await Budget.find({ user: req.user.user.id });
        res.json(budgets);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.updateBudget = async (req, res) => {
    try {
        const { category, limit } = req.body;
        const budget = await Budget.findById(req.params.id);

        if (!budget) {
            return res.status(404).json({ msg: 'Budget not found' });
        }
        if (budget.user.toString() !== req.user.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        budget.category = category || budget.category;
        budget.limit = limit || budget.limit;
        await budget.save();

        res.json(budget);
    } catch (err) {
        console.error("Error in updateBudget:", err);
        res.status(500).send('Server Error');
    }
};

exports.deleteBudget = async (req, res) => {
    try {
        const budget = await Budget.findById(req.params.id);

        if (!budget) {
            return res.status(404).json({ msg: 'Budget not found' });
        }
        if (budget.user.toString() !== req.user.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await Budget.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Budget removed' });
    } catch (err) {
        console.error("Error in deleteBudget:", err);
        res.status(500).send('Server Error');
    }
};
