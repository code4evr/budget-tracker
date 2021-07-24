import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserImg from '../../assets/user-solid.svg';
import { GET_USER } from '../../Queries/Queries';
import { AuthContext } from '../../Context/AuthContext';
import { useQuery } from '@apollo/client';
import './settings.css';

const Settings = () => {
  const { user } = useContext(AuthContext);

  const { id } = user;
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userId: id },
  });

  if (!data) {
    return '';
  }

  return (
    <div className="settings">
      <div className="user-main">
        <div className="user">
          <img
            src={data ? data.getUser.photo : UserImg}
            className={data ? 'user-profile' : 'user-image-custom'}
            alt="user-img"
          />
          <div className="user-info">
            <div>{data.getUser.name}</div>
            <div className="email">{data.getUser.email}</div>
          </div>
        </div>
      </div>
      <ul className="settings-list">
        <li className="settings-item">
          <Link to="/prefs/settings/account">Settings</Link>
        </li>
        <li className="settings-item">Themes</li>
        <li className="settings-item">Dark mode</li>
        <li className="settings-item">Logout</li>
      </ul>
    </div>
  );
};

export default Settings;
