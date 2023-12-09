import React, { useContext, useState } from 'react';
import { FinanceContext } from '../context/FinanceContext'; // Import the FinanceContext
import './IncomeTracker.css';

const IncomeTracker = () => {
    const { incomes, addIncome } = useContext(FinanceContext); // Use FinanceContext
    const [source, setSource] = useState('');
    const [amount, setAmount] = useState('');

    const handleSourceChange = (event) => {
        setSource(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Use addIncome from FinanceContext
        addIncome({
            source: source,
            amount: parseFloat(amount) // Convert string to number
        });
        // Reset the form fields
        setSource('');
        setAmount('');
    };

    return (
        <div className="income-tracker">
            <h2>Income Tracker</h2>
            <form onSubmit={handleSubmit} className="income-form"> {/* Updated form handler */}
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
