// src/context/FinanceContext.js
import React, { createContext, useState } from 'react';

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
    const [expenses, setExpenses] = useState([]);
    const [incomes, setIncomes] = useState([]);
    const [investments, setInvestments] = useState([]);
    const [budgets, setBudgets] = useState([]);

    // Add functions to modify these states
    const addExpense = expense => setExpenses(current => [...current, expense]);
    const addIncome = income => setIncomes(current => [...current, income]);
    const addInvestment = investment => setInvestments(current => [...current, investment]);
    const setBudget = budget => setBudgets(current => [...current, budget]);

    return (
        <FinanceContext.Provider value={{ expenses, addExpense, incomes, addIncome, investments, addInvestment, budgets, setBudget }}>
            {children}
        </FinanceContext.Provider>
    );
};
