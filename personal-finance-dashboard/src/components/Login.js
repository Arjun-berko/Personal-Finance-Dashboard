import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import { useAuth } from '../context/AuthContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Updated to useNavigate
    const { login } = useAuth(); // Accessing the login method from AuthContext

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', { email, password });
            if (response.data.token) {
                login(response.data.token); // Save the token using login method
                navigate('/budget'); // Redirect to budget page using navigate
            }
        } catch (error) {
            console.error("Login error", error.response);
            alert('Login failed!');
        }
    };

    return (
        <div className="auth-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="Email" 
                    required 
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    placeholder="Password" 
                    required 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
