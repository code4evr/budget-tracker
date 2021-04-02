import React from 'react';

const Budget = props => {
  return (
    <div className={props.classes}>
      <div className="d-flex justify-content-sm-between align-items-center">
        <span>
          {props.type}: {props.value}
        </span>
      </div>
    </div>
  );
};

export default Budget;
