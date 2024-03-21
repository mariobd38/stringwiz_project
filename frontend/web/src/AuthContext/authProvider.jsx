import Cookies from 'js-cookie';
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const storedIsAuthenticated = Cookies.get('isAuthenticated');
        return storedIsAuthenticated === 'true';
    });

    useEffect(() => {
        Cookies.set('isAuthenticated', isAuthenticated, { expires: 31 });
    }, [isAuthenticated]);


    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);