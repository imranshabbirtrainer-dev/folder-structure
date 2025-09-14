import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PublicRoute from './components/auth/PublicRoute';
import PrivateRoute from './components/auth/PrivateRoute';
import WebsiteLayout from './layouts/website/WebsiteLayout';
import DashboardLayout from './layouts/dashboard/DashboardLayout';
import HomePage from './pages/website/HomePage';
import AboutPage from './pages/website/AboutPage';
import ContactPage from './pages/website/ContactPage';
import LoginPage from './pages/auth/LoginPage';
import DashboardHome from './pages/dashboard/DashboardHome';
import DashboardAnalytics from './pages/dashboard/DashboardAnalytics';
import DashboardSettings from './pages/dashboard/DashboardSettings';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <PublicRoute>
              <WebsiteLayout />
            </PublicRoute>
          }>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
          
          {/* Auth Routes */}
          <Route path="/login" element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          } />
          
          {/* Private Dashboard Routes */}
          <Route path="/dashboard" element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }>
            <Route index element={<DashboardHome />} />
            <Route path="analytics" element={<DashboardAnalytics />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>
          
          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;