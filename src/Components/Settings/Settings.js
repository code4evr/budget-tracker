import React from 'react';
import './settings.css';

const Settings = () => {
  return (
    <div className="settings">
      <div className="user-main">
        <div className="user">
          <div className="user-image"></div>
          <div className="user-info">
            <div>Bidit Upadhyay</div>
            <div className="email">hiii.saket@gmail.com</div>
          </div>
        </div>
      </div>
      <ul className="settings-list">
        <li className="settings-item">Profile</li>
        <li className="settings-item">Change Password</li>
        <li className="settings-item">Dark mode</li>
        <li className="settings-item">Logout</li>
      </ul>
    </div>
  );
};

export default Settings;
