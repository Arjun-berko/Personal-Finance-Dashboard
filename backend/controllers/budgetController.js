const Budget = require('../models/Budget'); // Ensure this path is correct

exports.addBudget = async (req, res) => {
    try {
        const { category, limit, month } = req.body;
        let budget = new Budget({ 
            user: req.user.user.id, // Associate budget with logged-in user
            category, 
            limit,
            month // Include month in the new budget
        });
        console.log("Here it is: ", budget) // DEBUGGING LINE
        await budget.save();
        res.status(201).json(budget);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};


exports.getAllBudgets = async (req, res) => {
    try {
        console.log("Logged in user:", req.user); // Log the decoded user info
        const budgets = await Budget.find({ user: req.user.user.id });
        console.log("Budgets fetched:", budgets); // Log the fetched budgets
        res.json(budgets);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};


// ... Other code ...

exports.updateBudget = async (req, res) => {
    try {
        console.log("Updating Budget ID:", req.params.id); // Log the budget ID for update
        const { category, limit } = req.body;
        let budget = await Budget.findById(req.params.id);
        console.log("Fetched Budget for update:", budget); // Log the fetched budget object

        if (!budget) {
            return res.status(404).json({ msg: 'Budget not found' });
        };
        console.log("Budget user field:", budget.user);

        if (budget.user.toString() !== req.user.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        budget.category = category || budget.category;
        budget.limit = limit || budget.limit;
        await budget.save();

        res.json(budget);
    } catch (err) {
        console.error("Error in updateBudget:", err); // Enhanced error logging
        res.status(500).send('Server Error');
    }
};


// exports.deleteBudget = async (req, res) => {
//     try {
//         console.log("Deleting Budget ID:", req.params.id); // Log the budget ID for delete
//         let budget = await Budget.findById(req.params.id);
//         console.log("Fetched Budget for delete:", budget); // Log the fetched budget object

//         if (!budget) {
//             return res.status(404).json({ msg: 'Budget not found' });
//         }
//         if (budget.user.toString() !== req.user.user.id) {
//             return res.status(401).json({ msg: 'User not authorized' });
//         }
//         await budget.remove();

//         res.json({ msg: 'Budget removed' });
//     } catch (err) {
//         console.error("Error in deleteBudget:", err); // Enhanced error logging
//         res.status(500).send('Server Error');
//     }
// };


exports.deleteBudget = async (req, res) => {
    try {
        console.log("Deleting Budget ID:", req.params.id);
        
        const budget = await Budget.findById(req.params.id);
        console.log("Fetched Budget for delete:", budget);

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
