import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ExpenseTracker from './pages/ExpenseTracker';
import IncomeTracker from './pages/IncomeTracker';
import BudgetPlanner from './pages/BudgetPlanner';
import InvestmentPortfolio from './pages/InvestmentPortfolio';
// Import other components as needed

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/expense-tracker" element={<ExpenseTracker />} />
        <Route path="/income-tracker" element={<IncomeTracker />} />
        <Route path="/budget-planner" element={<BudgetPlanner />} />
        <Route path="/investment-portfolio" element={<InvestmentPortfolio />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
