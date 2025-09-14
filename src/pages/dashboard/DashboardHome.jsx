import React from 'react';
import './DashboardHome.css';

const DashboardHome = () => {
  const stats = [
    { title: 'Total Users', value: '1,234', change: '+12%', trend: 'up' },
    { title: 'Revenue', value: '$45,678', change: '+8%', trend: 'up' },
    { title: 'Orders', value: '567', change: '-3%', trend: 'down' },
    { title: 'Conversion', value: '3.2%', change: '+0.5%', trend: 'up' },
  ];

  const recentActivities = [
    { id: 1, action: 'New user registered', time: '2 minutes ago', type: 'user' },
    { id: 2, action: 'Order #1234 completed', time: '15 minutes ago', type: 'order' },
    { id: 3, action: 'Payment received', time: '1 hour ago', type: 'payment' },
    { id: 4, action: 'New product added', time: '2 hours ago', type: 'product' },
  ];

  return (
    <div className="dashboard-home">
      <div className="dashboard-home__header">
        <h1 className="dashboard-home__title">Dashboard Overview</h1>
        <p className="dashboard-home__subtitle">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      <div className="dashboard-home__stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-card__content">
              <h3 className="stat-card__title">{stat.title}</h3>
              <div className="stat-card__value">{stat.value}</div>
              <div className={`stat-card__change stat-card__change--${stat.trend}`}>
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-home__content">
        <div className="dashboard-home__section">
          <h2 className="dashboard-home__section-title">Recent Activity</h2>
          <div className="activity-list">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-item__icon">
                  {activity.type === 'user' && '👤'}
                  {activity.type === 'order' && '📦'}
                  {activity.type === 'payment' && '💰'}
                  {activity.type === 'product' && '📦'}
                </div>
                <div className="activity-item__content">
                  <div className="activity-item__action">{activity.action}</div>
                  <div className="activity-item__time">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-home__section">
          <h2 className="dashboard-home__section-title">Quick Actions</h2>
          <div className="quick-actions">
            <button className="quick-action-btn">
              <span className="quick-action-btn__icon">➕</span>
              Add New Item
            </button>
            <button className="quick-action-btn">
              <span className="quick-action-btn__icon">📊</span>
              View Reports
            </button>
            <button className="quick-action-btn">
              <span className="quick-action-btn__icon">⚙️</span>
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
