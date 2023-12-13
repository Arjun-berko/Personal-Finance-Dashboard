import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Update with your backend endpoint
            const response = await axios.post('http://localhost:8080/api/users/register', { username, email, password });
            alert('Registration successful!');
            // Redirect or handle the response as needed
        } catch (error) {
            console.error("Registration error", error.response);
            alert('Registration failed!');
        }
    };

    return (
        <div className="auth-form">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    placeholder="Username" 
                    required 
                />
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
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
