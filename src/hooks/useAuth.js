import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useAuth = () => {
  const [user, setUser] = useLocalStorage('user', null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (credentials) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const userData = {
        id: 1,
        name: 'John Doe',
        email: credentials.email,
        role: 'admin',
      };
      
      setUser(userData);
      return { success: true, user: userData };
    } catch (error) {
      return { success: false, error: error.message };
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

  useEffect(() => {
    // Check if user is still valid (e.g., token expiration)
    if (user) {
      // Add token validation logic here
    }
  }, [user]);

  return {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated,
    hasRole,
  };
};
