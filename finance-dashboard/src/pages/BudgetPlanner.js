import React, { useContext, useState } from 'react';
import { FinanceContext } from '../context/FinanceContext'; // Import the FinanceContext
import './BudgetPlanner.css';

const BudgetPlanner = () => {
    const { budgets, setBudget } = useContext(FinanceContext); // Use FinanceContext
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Use setBudget from FinanceContext
        setBudget({
            category: category,
            amount: parseFloat(amount) // Convert string to number
        });
        // Reset the form fields
        setCategory('');
        setAmount('');
    };

    return (
        <div className="budget-planner">
            <h2>Budget Planner</h2>
            <form onSubmit={handleSubmit} className="budget-form">
                <input type="text" placeholder="Category" value={category} onChange={handleCategoryChange} required />
                <input type="number" placeholder="Amount" value={amount} onChange={handleAmountChange} required />
                <button type="submit">Set Budget</button>
            </form>
            <div className="budget-list">
                {budgets.length === 0 ? (
                    <p>No budgets set</p>
                ) : (
                    <ul>
                        {budgets.map((budget, index) => (
                            <li key={index}>{budget.category}: ${budget.amount.toFixed(2)}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default BudgetPlanner;
