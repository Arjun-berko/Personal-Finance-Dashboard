// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FinanceProvider } from './context/FinanceContext';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ExpenseTracker from './pages/ExpenseTracker';
import IncomeTracker from './pages/IncomeTracker';
import InvestmentPortfolio from './pages/InvestmentPortfolio';
import BudgetPlanner from './pages/BudgetPlanner';
// Import other components as needed

function App() {
    return (
        <FinanceProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/expense-tracker" element={<ExpenseTracker />} />
                    <Route path="/income-tracker" element={<IncomeTracker />} />
                    <Route path="/investment-portfolio" element={<InvestmentPortfolio />} />
                    <Route path="/budget-planner" element={<BudgetPlanner />} />
                    {/* Define other routes here */}
                </Routes>
            </Router>
        </FinanceProvider>
    );
}

export default App;
