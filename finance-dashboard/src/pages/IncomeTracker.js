import React, { useState } from 'react';
import './IncomeTracker.css'; // Importing the CSS file for styling

const IncomeTracker = () => {
    const [incomes, setIncomes] = useState([]);
    const [source, setSource] = useState('');
    const [amount, setAmount] = useState('');

    const handleSourceChange = (event) => {
        setSource(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const addIncome = (event) => {
        event.preventDefault();
        const newIncome = {
            source: source,
            amount: parseFloat(amount) // Convert string to number
        };
        setIncomes([...incomes, newIncome]);
        // Reset the form fields
        setSource('');
        setAmount('');
    };

    return (
        <div className="income-tracker">
            <h2>Income Tracker</h2>
            <form onSubmit={addIncome} className="income-form">
                <input type="text" placeholder="Source" value={source} onChange={handleSourceChange} required />
                <input type="number" placeholder="Amount" value={amount} onChange={handleAmountChange} required />
                <button type="submit">Add Income</button>
            </form>
            <div className="income-list">
                {incomes.length === 0 ? (
                    <p>No income recorded</p>
                ) : (
                    <ul>
                        {incomes.map((income, index) => (
                            <li key={index}>{income.source} - ${income.amount.toFixed(2)}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default IncomeTracker;
