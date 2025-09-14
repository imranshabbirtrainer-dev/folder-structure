import React from 'react';
import './DashboardAnalytics.css';

const DashboardAnalytics = () => {
  const chartData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 78 },
    { month: 'Mar', value: 90 },
    { month: 'Apr', value: 85 },
    { month: 'May', value: 95 },
    { month: 'Jun', value: 88 },
  ];

  const topPages = [
    { page: '/home', views: 1250, visitors: 890 },
    { page: '/products', views: 980, visitors: 650 },
    { page: '/about', views: 750, visitors: 520 },
    { page: '/contact', views: 420, visitors: 310 },
  ];

  return (
    <div className="dashboard-analytics">
      <div className="dashboard-analytics__header">
        <h1 className="dashboard-analytics__title">Analytics</h1>
        <p className="dashboard-analytics__subtitle">
          Track your website performance and user behavior
        </p>
      </div>

      <div className="dashboard-analytics__content">
        <div className="analytics-chart">
          <h2 className="analytics-chart__title">Monthly Traffic</h2>
          <div className="chart-container">
            <div className="chart-bars">
              {chartData.map((data, index) => (
                <div key={index} className="chart-bar">
                  <div 
                    className="chart-bar__fill"
                    style={{ height: `${data.value}%` }}
                  ></div>
                  <div className="chart-bar__label">{data.month}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="analytics-tables">
          <div className="analytics-table">
            <h3 className="analytics-table__title">Top Pages</h3>
            <div className="table">
              <div className="table__header">
                <div className="table__cell">Page</div>
                <div className="table__cell">Views</div>
                <div className="table__cell">Visitors</div>
              </div>
              {topPages.map((page, index) => (
                <div key={index} className="table__row">
                  <div className="table__cell">{page.page}</div>
                  <div className="table__cell">{page.views.toLocaleString()}</div>
                  <div className="table__cell">{page.visitors.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="analytics-summary">
            <h3 className="analytics-summary__title">Summary</h3>
            <div className="summary-stats">
              <div className="summary-stat">
                <div className="summary-stat__value">2,400</div>
                <div className="summary-stat__label">Total Views</div>
              </div>
              <div className="summary-stat">
                <div className="summary-stat__value">1,370</div>
                <div className="summary-stat__label">Unique Visitors</div>
              </div>
              <div className="summary-stat">
                <div className="summary-stat__value">1.75</div>
                <div className="summary-stat__label">Pages per Visit</div>
              </div>
              <div className="summary-stat">
                <div className="summary-stat__value">2:45</div>
                <div className="summary-stat__label">Avg. Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAnalytics;
