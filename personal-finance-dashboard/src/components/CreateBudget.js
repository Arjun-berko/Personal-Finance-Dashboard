import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import './CreateBudget.css'; // Path to your CSS file

function CreateBudget() {
    const [category, setCategory] = useState('Utilities');
    const [limit, setLimit] = useState('');
    const { authToken } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/budgets/', 
                { category, limit },
                { headers: { Authorization: `Bearer ${authToken}` } }
            );
            alert('Budget created successfully!');
            setLimit('');
        } catch (error) {
            console.error('Error creating budget', error.response);
            alert('Failed to create budget');
        }
    };

    return (
        <div className="create-budget-form">
            <h2>Create Budget</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Category:</label>
                    <select value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="Utilities">Utilities</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Rent">Rent</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Savings">Savings</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Limit ($):</label>
                    <input 
                        type="number" 
                        value={limit} 
                        onChange={e => setLimit(e.target.value)} 
                        placeholder="Enter budget limit" 
                        min="0" 
                        required 
                    />
                </div>
                <button type="submit" className="submit-button">Create Budget</button>
            </form>
        </div>
    );
}

export default CreateBudget;
