import React, { useState } from 'react';
import {
  FaUserAlt,
  FaCog,
  FaWallet,
  FaPalette,
  FaBell,
  FaBullseye,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SettingsAside = () => {
  const [active, setActive] = useState(['Account']);

  const handleClick = e => {
    if (e.target.innerText !== active[0]) {
      if (active.length > 0) {
        active.pop();
        setActive(active.concat(e.target.innerText.trim()));
      }
    }

    document
      .querySelector('body')
      .classList.add('settings-aside-active');
  };

  console.log(active[0].trim());

  return (
    <ul className="settings-menu">
      <li className={active[0] === 'Account' ? 'active' : ''}>
        <Link to="/prefs/settings/account" onClick={handleClick}>
          <span>
            <FaUserAlt size="1rem" />
          </span>{' '}
          Account
        </Link>
      </li>
      <li
        className={active[0] === 'General' ? 'active' : ''}
        onClick={handleClick}
      >
        <Link to="/prefs/settings/general">
          <span>
            <FaCog size="1.2rem" />
          </span>{' '}
          General
        </Link>
      </li>
      <li
        className={active[0] === 'Subscription' ? 'active' : ''}
        onClick={handleClick}
      >
        <Link to="/prefs/settings/subscription">
          <span>
            <FaWallet size="1.2rem" />
          </span>{' '}
          Subscription
        </Link>
      </li>
      <li
        className={active[0] === 'Themes' ? 'active' : ''}
        onClick={handleClick}
      >
        <Link to="/prefs/settings/themes">
          <span>
            <FaPalette size="1.2rem" />
          </span>{' '}
          Themes
        </Link>
      </li>
      <li
        className={active[0] === 'Notification' ? 'active' : ''}
        onClick={handleClick}
      >
        <Link to="/prefs/settings/notification">
          <span>
            <FaBell size="1.2rem" />
          </span>{' '}
          Notification
        </Link>
      </li>
      <li
        className={active[0] === 'Login Activity' ? 'active' : ''}
        onClick={handleClick}
      >
        <Link to="/prefs/settings/activity">
          <span>
            <FaBullseye size="1.2rem" />
          </span>{' '}
          Login Activity
        </Link>
      </li>
    </ul>
  );
};

export default SettingsAside;
