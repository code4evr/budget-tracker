import React, { useState } from 'react';
import AllBudget from '../BudgetHome/AllBudget';
import Recent from '../Recent/Recent';
import Archive from '../Archive/Archive';
import UtilityBar from '../UtilityBar/UtilityBar';
import { Button } from '../Buttons/Buttons';
import './tab.css';

const Tab = () => {
  const [active, setActive] = useState({
    all: true,
    recent: false,
    archived: false,
  });

  const { all, recent, archived } = active;

  const handleClick = handler => e => {
    if (handler === 'All') {
      setActive({
        ...active,
        all: true,
        recent: false,
        archived: false,
      });
    } else if (handler === 'Recent') {
      console.log('recent button clicked');
      setActive({
        ...active,
        all: false,
        recent: true,
        archived: false,
      });
    } else if (handler === 'Archived') {
      console.log('archived clicked');
      setActive({
        ...active,
        all: false,
        recent: false,
        archived: true,
      });
    }
  };
  return (
    <React.Fragment>
      <div className="utility-wrapper">
        <UtilityBar />
      </div>
      <div className="tab-wrapper">
        <div className="row">
          <div className="col-12 tab-buttons">
            <div className="tab-btn">
              <Button
                buttonName="All"
                classname={all ? 'btn-all tab-active' : 'btn-all'}
                parameter={true}
                onclick={handleClick}
              />
            </div>
            <div className="tab-btn">
              <Button
                buttonName="Recent"
                classname={
                  recent ? 'btn-recent tab-active' : 'btn-recent'
                }
                parameter={true}
                onclick={handleClick}
              />
            </div>
            <div className="tab-btn">
              <Button
                buttonName="Archived"
                classname={
                  archived
                    ? 'btn-archived tab-active'
                    : 'btn-archived'
                }
                parameter={true}
                onclick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
      {all && <AllBudget />}
      {recent && <Recent />}
      {archived && <Archive />}
    </React.Fragment>
  );
};

export default Tab;
