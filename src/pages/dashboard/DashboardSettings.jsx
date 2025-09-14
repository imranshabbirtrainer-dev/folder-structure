import React, { useState } from 'react';
import './DashboardSettings.css';

const DashboardSettings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      sms: false,
    },
    privacy: {
      profileVisible: true,
      dataSharing: false,
    },
    preferences: {
      theme: 'light',
      language: 'en',
      timezone: 'UTC',
    },
  });

  const handleSettingChange = (category, setting, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value,
      },
    }));
  };

  const handleSave = () => {
    // Handle settings save
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="dashboard-settings">
      <div className="dashboard-settings__header">
        <h1 className="dashboard-settings__title">Settings</h1>
        <p className="dashboard-settings__subtitle">
          Manage your account preferences and application settings
        </p>
      </div>

      <div className="dashboard-settings__content">
        <div className="settings-section">
          <h2 className="settings-section__title">Notifications</h2>
          <div className="settings-group">
            <div className="setting-item">
              <div className="setting-item__info">
                <h3 className="setting-item__title">Email Notifications</h3>
                <p className="setting-item__description">
                  Receive updates and alerts via email
                </p>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={settings.notifications.email}
                  onChange={(e) => handleSettingChange('notifications', 'email', e.target.checked)}
                />
                <span className="toggle__slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-item__info">
                <h3 className="setting-item__title">Push Notifications</h3>
                <p className="setting-item__description">
                  Receive browser push notifications
                </p>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={settings.notifications.push}
                  onChange={(e) => handleSettingChange('notifications', 'push', e.target.checked)}
                />
                <span className="toggle__slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-item__info">
                <h3 className="setting-item__title">SMS Notifications</h3>
                <p className="setting-item__description">
                  Receive important updates via SMS
                </p>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={settings.notifications.sms}
                  onChange={(e) => handleSettingChange('notifications', 'sms', e.target.checked)}
                />
                <span className="toggle__slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h2 className="settings-section__title">Privacy</h2>
          <div className="settings-group">
            <div className="setting-item">
              <div className="setting-item__info">
                <h3 className="setting-item__title">Public Profile</h3>
                <p className="setting-item__description">
                  Make your profile visible to other users
                </p>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={settings.privacy.profileVisible}
                  onChange={(e) => handleSettingChange('privacy', 'profileVisible', e.target.checked)}
                />
                <span className="toggle__slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-item__info">
                <h3 className="setting-item__title">Data Sharing</h3>
                <p className="setting-item__description">
                  Allow sharing of anonymized data for analytics
                </p>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={settings.privacy.dataSharing}
                  onChange={(e) => handleSettingChange('privacy', 'dataSharing', e.target.checked)}
                />
                <span className="toggle__slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h2 className="settings-section__title">Preferences</h2>
          <div className="settings-group">
            <div className="setting-item">
              <div className="setting-item__info">
                <h3 className="setting-item__title">Theme</h3>
                <p className="setting-item__description">
                  Choose your preferred color scheme
                </p>
              </div>
              <select
                className="setting-select"
                value={settings.preferences.theme}
                onChange={(e) => handleSettingChange('preferences', 'theme', e.target.value)}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto</option>
              </select>
            </div>

            <div className="setting-item">
              <div className="setting-item__info">
                <h3 className="setting-item__title">Language</h3>
                <p className="setting-item__description">
                  Select your preferred language
                </p>
              </div>
              <select
                className="setting-select"
                value={settings.preferences.language}
                onChange={(e) => handleSettingChange('preferences', 'language', e.target.value)}
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>

            <div className="setting-item">
              <div className="setting-item__info">
                <h3 className="setting-item__title">Timezone</h3>
                <p className="setting-item__description">
                  Set your local timezone
                </p>
              </div>
              <select
                className="setting-select"
                value={settings.preferences.timezone}
                onChange={(e) => handleSettingChange('preferences', 'timezone', e.target.value)}
              >
                <option value="UTC">UTC</option>
                <option value="EST">Eastern Time</option>
                <option value="PST">Pacific Time</option>
                <option value="GMT">Greenwich Mean Time</option>
              </select>
            </div>
          </div>
        </div>

        <div className="settings-actions">
          <button className="btn btn--primary" onClick={handleSave}>
            Save Settings
          </button>
          <button className="btn btn--secondary">
            Reset to Defaults
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSettings;
