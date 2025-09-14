import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/dashboard/analytics', label: 'Analytics', icon: '📈' },
    { path: '/dashboard/settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar__header">
          <h2 className="sidebar__title">Dashboard</h2>
          <button className="sidebar__close" onClick={onClose}>
            ✕
          </button>
        </div>
        <nav className="sidebar__nav">
          <ul className="sidebar__menu">
            {menuItems.map((item) => (
              <li key={item.path} className="sidebar__menu-item">
                <Link
                  to={item.path}
                  className={`sidebar__menu-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={onClose}
                >
                  <span className="sidebar__menu-icon">{item.icon}</span>
                  <span className="sidebar__menu-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="sidebar__footer">
          <Link to="/" className="sidebar__footer-link">
            ← Back to Website
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
