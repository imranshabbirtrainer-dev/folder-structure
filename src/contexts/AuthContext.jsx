import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Dummy admin user
const ADMIN_USER = {
  id: 1,
  email: 'admin@gmail.com',
  password: 'admin',
  name: 'Admin User',
  role: 'admin'
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check credentials
      if (email === ADMIN_USER.email && password === ADMIN_USER.password) {
        const userData = {
          id: ADMIN_USER.id,
          email: ADMIN_USER.email,
          name: ADMIN_USER.name,
          role: ADMIN_USER.role,
        };
        
        setUser(userData);
        return { success: true, user: userData };
      } else {
        return { 
          success: false, 
          error: 'Invalid email or password' 
        };
      }
    } catch (error) {
      return { 
        success: false, 
        error: 'Login failed. Please try again.' 
      };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  const hasRole = (role) => {
    return user && user.role === role;
  };

  // Check if user is still valid on app load
  useEffect(() => {
    if (user) {
      // In a real app, you would validate the token here
      console.log('User authenticated:', user);
    }
  }, [user]);

  const value = {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated,
    hasRole,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
