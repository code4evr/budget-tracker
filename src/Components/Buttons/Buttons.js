import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const CancelButton = () => {
  return (
    <div>
      <button className="btn btn-cancel">Cancel</button>
    </div>
  );
};

const UpdateButton = () => {
  return (
    <div>
      <button className="btn btn-upadate">Update</button>
    </div>
  );
};

const BackButton = () => {
  return (
    <div>
      <button className="btn btn-back">Back</button>
    </div>
  );
};

const BackButtonArrow = () => {
  return (
    <div>
      <button className="btn btn-arrow">
        <FaArrowLeft />
      </button>
    </div>
  );
};

export { CancelButton, UpdateButton, BackButton, BackButtonArrow };
