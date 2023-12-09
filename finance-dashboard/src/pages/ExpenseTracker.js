import React, { useContext, useState } from 'react';
import { FinanceContext } from '../context/FinanceContext'; // Import the FinanceContext
import './ExpenseTracker.css';

const ExpenseTracker = () => {
    const { expenses, addExpense } = useContext(FinanceContext); // Use FinanceContext
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Use addExpense from FinanceContext
        addExpense({
            description: description,
            amount: parseFloat(amount) // Convert string to number
        });
        // Reset the form fields
        setDescription('');
        setAmount('');
    };

    return (
        <div className="expense-tracker">
            <h2>Expense Tracker</h2>
            <form onSubmit={handleSubmit} className="expense-form"> {/* Updated form handler */}
                <input type="text" placeholder="Description" value={description} onChange={handleDescriptionChange} required />
                <input type="number" placeholder="Amount" value={amount} onChange={handleAmountChange} required />
                <button type="submit">Add Expense</button>
            </form>
            <div className="expense-list">
                {expenses.length === 0 ? (
                    <p>No expenses recorded</p>
                ) : (
                    <ul>
                        {expenses.map((expense, index) => (
                            <li key={index}>{expense.description} - ${expense.amount.toFixed(2)}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ExpenseTracker;
