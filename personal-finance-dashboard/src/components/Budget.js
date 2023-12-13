import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import './Budget.css';

const Budget = () => {
    const [budgets, setBudgets] = useState([]);
    const [category, setCategory] = useState('Utilities');
    const [limit, setLimit] = useState('');
    const [month, setMonth] = useState(new Date().toLocaleString('default', { month: 'long' }));
    const [isEditing, setIsEditing] = useState(false);
    const [editBudgetId, setEditBudgetId] = useState(null);
    const { authToken } = useAuth();

    const allowedCategories = ['Utilities', 'Groceries', 'Rent', 'Transportation', 'Entertainment', 'Healthcare', 'Dining', 'Other'];
    const allowedMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const fetchBudgets = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/budgets', {
                headers: { Authorization: `Bearer ${authToken}` },
            });
            setBudgets(response.data);
        } catch (error) {
            console.error('Error fetching budgets', error.response);
        }
    };

    useEffect(() => {
        fetchBudgets();
    }, [authToken]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newBudget = { category, limit: parseFloat(limit), month, year: new Date().getFullYear() };
            const response = await axios.post('http://localhost:8080/api/budgets', newBudget, {
                headers: { Authorization: `Bearer ${authToken}` },
            });
            setBudgets([...budgets, response.data]);
            resetForm();
        } catch (error) {
            console.error('Error adding budget', error.response);
        }
    };

    const startEdit = (budget) => {
        setEditBudgetId(budget._id);
        setCategory(budget.category);
        setLimit(budget.limit.toString());
        setMonth(budget.month);
        setIsEditing(true);
    };

    const cancelEdit = () => {
        setIsEditing(false);
        setEditBudgetId(null);
        resetForm();
    };

    const resetForm = () => {
        setCategory('Utilities');
        setLimit('');
        setMonth(new Date().toLocaleString('default', { month: 'long' }));
    };

    const updateBudget = async (budgetId) => {
        try {
            const updatedBudget = { category, limit: parseFloat(limit), month };
            await axios.put(`http://localhost:8080/api/budgets/${budgetId}`, updatedBudget, {
                headers: { Authorization: `Bearer ${authToken}` },
            });
            setIsEditing(false);
            setEditBudgetId(null);
            resetForm();
            fetchBudgets();
        } catch (error) {
            console.error('Error updating budget', error.response);
        }
    };

    const deleteBudget = async (budgetId) => {
        try {
            await axios.delete(`http://localhost:8080/api/budgets/${budgetId}`, {
                headers: { Authorization: `Bearer ${authToken}` },
            });
            fetchBudgets();
        } catch (error) {
            console.error('Error deleting budget', error.response);
        }
    };

    return (
        <div className="budget">
            <h2>Budget</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                isEditing ? updateBudget(editBudgetId) : handleSubmit(e);
            }} className="budget-form">
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    {allowedCategories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
                <select value={month} onChange={(e) => setMonth(e.target.value)}>
                    {allowedMonths.map((mth) => (
                        <option key={mth} value={mth}>{mth}</option>
                    ))}
                </select>
                <input type="number" placeholder="Limit" value={limit} onChange={(e) => setLimit(e.target.value)} required />
                <button type="submit">{isEditing ? 'Update' : 'Add'} Budget Item</button>
                {isEditing && <button onClick={cancelEdit} className="cancel-button">Cancel</button>}
            </form>
            <div className="budget-list">
                {budgets.map((budget) => (
                    <div key={budget._id} className="budget-item">
                        <span>{budget.category} - {budget.month}/{budget.year}: ${budget.limit.toFixed(2)}</span>
                        <div>
                            <button onClick={() => startEdit(budget)} className="edit-button">Edit</button>
                            <button onClick={() => deleteBudget(budget._id)} className="delete-button">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Budget;
