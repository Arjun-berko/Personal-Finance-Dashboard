import React, { useState } from 'react';
import './InvestmentPortfolio.css'; // Importing the CSS file for styling

const InvestmentPortfolio = () => {
    const [investments, setInvestments] = useState([]);
    const [investmentName, setInvestmentName] = useState('');
    const [investmentValue, setInvestmentValue] = useState('');

    const handleInvestmentNameChange = (event) => {
        setInvestmentName(event.target.value);
    };

    const handleInvestmentValueChange = (event) => {
        setInvestmentValue(event.target.value);
    };

    const addInvestment = (event) => {
        event.preventDefault();
        const newInvestment = {
            name: investmentName,
            value: parseFloat(investmentValue) // Convert string to number
        };
        setInvestments([...investments, newInvestment]);
        // Reset the form fields
        setInvestmentName('');
        setInvestmentValue('');
    };

    return (
        <div className="investment-portfolio">
            <h2>Investment Portfolio</h2>
            <form onSubmit={addInvestment} className="investment-form">
                <input type="text" placeholder="Investment Name" value={investmentName} onChange={handleInvestmentNameChange} required />
                <input type="number" placeholder="Value" value={investmentValue} onChange={handleInvestmentValueChange} required />
                <button type="submit">Add Investment</button>
            </form>
            <div className="investment-list">
                {investments.length === 0 ? (
                    <p>No investments recorded</p>
                ) : (
                    <ul>
                        {investments.map((investment, index) => (
                            <li key={index}>{investment.name} - ${investment.value.toFixed(2)}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default InvestmentPortfolio;
