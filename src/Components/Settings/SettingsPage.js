import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import SettingsNav from './SettingsNav';
import SettingsAside from './SettingsAside';
import Account from './Account';
import General from './General';
import Subscription from './Subscription';
import Themes from './Themes';
import Notification from './Notification';
import LoginActivity from './LoginActivity';
import { AuthContext } from '../../Context/AuthContext';
import { GET_USER } from '../../Queries/Queries';
import { useQuery } from '@apollo/client';

const SettingsPage = () => {
  const { user } = useContext(AuthContext);

  const { id } = user;
  console.log(id);
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userId: id },
  });

  const handleClick = () => {
    document
      .querySelector('body')
      .classList.remove('settings-aside-active');
  };

  if (!data) {
    return '';
  }

  return (
    <div className="settings-container">
      <SettingsNav />
      <div className="settings-wrapper">
        <div className="row settings-mobile">
          <div className="col-3 col-md-3 col-12 col-sm-12">
            <SettingsAside />
          </div>
          <div className="col-9 col-md-9 col-12 col-sm-12 settings-content">
            <div className="settings-content-wrapper">
              <div className="back-btn">
                <button onClick={handleClick}>
                  <FaArrowLeft />
                </button>
              </div>
              <Switch>
                <Route path="/prefs/settings/account">
                  <Account data={data} />
                </Route>
                <Route path="/prefs/settings/general">
                  <General />
                </Route>
                <Route path="/prefs/settings/subscription">
                  <Subscription />
                </Route>
                <Route path="/prefs/settings/themes">
                  <Themes />
                </Route>
                <Route path="/prefs/settings/notification">
                  <Notification />
                </Route>
                <Route path="/prefs/settings/activity">
                  <LoginActivity />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
