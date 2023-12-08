import React, { useState } from 'react';
import './ExpenseTracker.css';

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState([]);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const addExpense = (event) => {
        event.preventDefault();
        const newExpense = {
            description: description,
            amount: parseFloat(amount) // Convert string to number
        };
        setExpenses([...expenses, newExpense]);
        // Reset the form fields
        setDescription('');
        setAmount('');
    };

    return (
        <div className="expense-tracker">
            <h2>Expense Tracker</h2>
            <form onSubmit={addExpense} className="expense-form">
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
