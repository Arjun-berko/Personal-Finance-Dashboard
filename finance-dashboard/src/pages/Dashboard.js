import React from 'react';
import './Dashboard.css'; // Importing the CSS file for styling

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-section balance">
                <h2>Current Balance</h2>
                {/* Placeholder for balance */}
                <p>$0.00</p>
            </div>
            <div className="dashboard-section recent-transactions">
                <h2>Recent Transactions</h2>
                {/* Placeholder for transactions */}
                <ul>
                    <li>Transaction 1</li>
                    <li>Transaction 2</li>
                    <li>Transaction 3</li>
                </ul>
            </div>
            <div className="dashboard-section quick-links">
                <h2>Quick Links</h2>
                {/* Placeholder for links */}
                <p>Links to other features here</p>
            </div>
        </div>
    );
};

export default Dashboard;
