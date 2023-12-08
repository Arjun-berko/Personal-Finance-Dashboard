import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <NavLink to="/" activeClassName="active">Finance Dashboard</NavLink>
            </div>
            <ul className="navbar-links">
                <li><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
                <li><NavLink to="/expense-tracker" activeClassName="active">Expense Tracker</NavLink></li>
                <li><NavLink to="/income-tracker" activeClassName="active">Income Tracker</NavLink></li>
                <li><NavLink to="/budget-planner" activeClassName="active">Budget Planner</NavLink></li>
                <li><NavLink to="/investment-portfolio" activeClassName="active">Investment Portfolio</NavLink></li>
                {/* Add other navigation links as needed */}
            </ul>
        </nav>
    );
};


export default Navbar;
