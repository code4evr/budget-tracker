import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import './settings.css';

const SettingsNav = () => {
  return (
    <div className="navbar settings-nav">
      <div className="settings-items">
        <div className="nav-settings">
          <span>Settings</span>
        </div>
        <div className="settings-close">
          <Link to="/app/home">
            Close
            <span>
              <FaTimes size="1.5rem" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SettingsNav;
