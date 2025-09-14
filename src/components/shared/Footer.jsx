import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = ({ variant = 'website' }) => {
  if (variant === 'dashboard') {
    return (
      <footer className="footer footer--dashboard">
        <div className="footer__container">
          <p>&copy; 2024 Dashboard. All rights reserved.</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer footer--website">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3>MyWebsite</h3>
            <p>Building amazing web experiences.</p>
          </div>
          <div className="footer__section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer__section">
            <h4>Dashboard</h4>
            <ul>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/dashboard/analytics">Analytics</Link></li>
              <li><Link to="/dashboard/settings">Settings</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2024 MyWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
