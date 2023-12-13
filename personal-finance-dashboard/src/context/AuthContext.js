import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(sessionStorage.getItem('token'));

    const login = (token) => {
        sessionStorage.setItem('token', token);
        setAuthToken(token);
    };

    const logout = () => {
        sessionStorage.removeItem('token');
        setAuthToken(null);
    };

    return (
        <AuthContext.Provider value={{ authToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
