import React from 'react';

const Button = ({ onclick, classname, buttonName, faTimes }) => {
  return (
    <div>
      <button className={classname} onClick={() => onclick()}>
        {faTimes || buttonName}
      </button>
    </div>
  );
};

export default Button;
