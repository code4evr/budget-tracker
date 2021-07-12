import React from 'react';
import './themeSkeleton.css';

const ThemeSkeleton = ({ themeName }) => {
  return (
    <div className="theme-skeleton">
      <div className={`theme-skeleton-header ${themeName} `}>
        <span>{themeName}</span>
      </div>
      <div className="theme-skeleton-body">
        <span className="budget-1"></span>
        <span className="budget-2"></span>
      </div>
    </div>
  );
};

export default ThemeSkeleton;
