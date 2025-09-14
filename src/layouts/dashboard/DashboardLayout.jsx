import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import Sidebar from '../../components/dashboard/Sidebar';
import './DashboardLayout.css';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close sidebar on mobile when route changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="dashboard-layout__main">
        <Header variant="dashboard" onMenuClick={toggleSidebar} />
        <main className="dashboard-layout__content">
          <Outlet />
        </main>
        <Footer variant="dashboard" />
      </div>
    </div>
  );
};

export default DashboardLayout;
