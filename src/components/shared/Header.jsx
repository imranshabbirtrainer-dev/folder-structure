import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Header.css';

const Header = ({ variant = 'website', onMenuClick }) => {
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
  };

  if (variant === 'dashboard') {
    return (
      <header className="header header--dashboard">
        <div className="header__container">
          <div className="header__left">
            <button 
              className="header__menu-btn"
              onClick={onMenuClick}
              aria-label="Toggle menu"
            >
              ☰
            </button>
            <div className="header__logo">
              <Link to="/dashboard">Dashboard</Link>
            </div>
          </div>
          <nav className="header__nav">
            <Link 
              to="/dashboard" 
              className={`header__nav-link ${isActive('/dashboard') ? 'active' : ''}`}
            >
              Home
            </Link>
          <Link 
            to="/dashboard/analytics" 
            className={`header__nav-link ${isActive('/dashboard/analytics') ? 'active' : ''}`}
          >
            Analytics
          </Link>
          <Link 
            to="/dashboard/settings" 
            className={`header__nav-link ${isActive('/dashboard/settings') ? 'active' : ''}`}
          >
            Settings
          </Link>
          <button 
            onClick={handleLogout}
            className="header__logout-btn"
          >
            Logout
          </button>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="header header--website">
        <div className="header__container">
          <div className="header__left">
            <div className="header__logo">
              <Link to="/">MyWebsite</Link>
            </div>
          </div>
          <nav className="header__nav">
          <Link 
            to="/" 
            className={`header__nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`header__nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`header__nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            Contact
          </Link>
          {isAuthenticated() ? (
            <div className="header__user-menu">
              <span className="header__user-name">Welcome, {user?.name}</span>
              <Link 
                to="/dashboard" 
                className="header__nav-link header__nav-link--cta"
              >
                Dashboard
              </Link>
              <button 
                onClick={handleLogout}
                className="header__logout-btn"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="header__nav-link header__nav-link--cta"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
