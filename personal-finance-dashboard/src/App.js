import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import Budget from './components/Budget';
import CreateBudget from './components/CreateBudget'; // Import the CreateBudget component
import './App.css';

const PrivateRoute = ({ children }) => {
    const { authToken } = useAuth();
    return authToken ? children : <Navigate to="/login" replace />;
};

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/budget" element={<PrivateRoute><Budget /></PrivateRoute>} />
                    <Route path="/create-budget" element={<PrivateRoute><CreateBudget /></PrivateRoute>} /> {/* New Route for CreateBudget */}
                    <Route path="/" element={<Navigate to="/budget" replace />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
