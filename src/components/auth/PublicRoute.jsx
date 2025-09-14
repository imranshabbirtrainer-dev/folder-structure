import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // If user is authenticated and trying to access login page, redirect to dashboard
  if (isAuthenticated() && location.pathname === '/login') {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PublicRoute;
