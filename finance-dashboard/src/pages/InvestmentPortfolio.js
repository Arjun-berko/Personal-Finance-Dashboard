import React, { useContext, useState } from 'react';
import { FinanceContext } from '../context/FinanceContext'; // Import the FinanceContext
import './InvestmentPortfolio.css';

const InvestmentPortfolio = () => {
    const { investments, addInvestment } = useContext(FinanceContext); // Use FinanceContext
    const [investmentName, setInvestmentName] = useState('');
    const [investmentValue, setInvestmentValue] = useState('');

    const handleInvestmentNameChange = (event) => {
        setInvestmentName(event.target.value);
    };

    const handleInvestmentValueChange = (event) => {
        setInvestmentValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Use addInvestment from FinanceContext
        addInvestment({
            name: investmentName,
            value: parseFloat(investmentValue) // Convert string to number
        });
        // Reset the form fields
        setInvestmentName('');
        setInvestmentValue('');
    };

    return (
        <div className="investment-portfolio">
            <h2>Investment Portfolio</h2>
            <form onSubmit={handleSubmit} className="investment-form">
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
