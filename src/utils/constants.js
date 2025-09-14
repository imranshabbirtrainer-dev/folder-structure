// Application constants
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  DASHBOARD: '/dashboard',
  DASHBOARD_ANALYTICS: '/dashboard/analytics',
  DASHBOARD_SETTINGS: '/dashboard/settings',
};

export const API_ENDPOINTS = {
  BASE_URL: process.env.NODE_ENV === 'production' ? 'https://api.example.com' : 'http://localhost:3001',
  USERS: '/api/users',
  ANALYTICS: '/api/analytics',
  SETTINGS: '/api/settings',
};

export const THEME = {
  COLORS: {
    PRIMARY: '#007bff',
    SECONDARY: '#6c757d',
    SUCCESS: '#28a745',
    DANGER: '#dc3545',
    WARNING: '#ffc107',
    INFO: '#17a2b8',
    LIGHT: '#f8f9fa',
    DARK: '#343a40',
  },
  BREAKPOINTS: {
    MOBILE: '768px',
    TABLET: '1024px',
    DESKTOP: '1200px',
  },
};
