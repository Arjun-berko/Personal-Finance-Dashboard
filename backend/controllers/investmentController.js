const Investment = require('../models/Investment'); // Ensure this path is correct

exports.addInvestment = async (req, res) => {
    try {
        const { user, name, value, date } = req.body;
        let investment = new Investment({ user, name, value, date });
        await investment.save();
        res.status(201).json(investment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getAllInvestments = async (req, res) => {
    try {
        const investments = await Investment.find();
        res.json(investments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.updateInvestment = async (req, res) => {
    try {
        const { name, value, date } = req.body;
        let investment = await Investment.findById(req.params.id);
        if (!investment) {
            return res.status(404).json({ msg: 'Investment not found' });
        }
        investment.name = name || investment.name;
        investment.value = value || investment.value;
        investment.date = date || investment.date;
        await investment.save();
        res.json(investment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.deleteInvestment = async (req, res) => {
    try {
        let investment = await Investment.findById(req.params.id);
        if (!investment) {
            return res.status(404).json({ msg: 'Investment not found' });
        }
        await investment.remove();
        res.json({ msg: 'Investment removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
