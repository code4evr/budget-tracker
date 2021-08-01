import React from 'react';
import './button.css';

const Button = ({
  onclick,
  classname,
  buttonName,
  faTimes,
  parameter,
}) => {
  return (
    <div>
      {onclick && parameter ? (
        <button
          name={buttonName}
          className={classname}
          onClick={onclick(buttonName)}
        >
          {buttonName}
        </button>
      ) : onclick ? (
        <button
          name={buttonName}
          className={classname}
          onClick={() => onclick()}
        >
          {buttonName}
        </button>
      ) : (
        <button name={buttonName} className={classname}>
          {buttonName}
        </button>
      )}
    </div>
  );
};

const IconButton = ({ iconButtonName, classname, icon, onclick }) => {
  return (
    <div>
      <button
        name={iconButtonName}
        className={classname}
        onClick={() => onclick()}
      >
        {icon}
      </button>
    </div>
  );
};

export { Button, IconButton };
