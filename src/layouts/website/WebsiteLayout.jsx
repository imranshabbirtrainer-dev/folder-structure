import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';
import './WebsiteLayout.css';

const WebsiteLayout = () => {
  return (
    <div className="website-layout">
      <Header variant="website" />
      <main className="website-layout__main">
        <Outlet />
      </main>
      <Footer variant="website" />
    </div>
  );
};

export default WebsiteLayout;
