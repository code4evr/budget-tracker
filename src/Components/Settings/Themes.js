import React from 'react';
import ThemeSkeleton from '../ThemeSkeleton/ThemeSkeleton';
import './themes.css';

const Themes = () => {
  return (
    <div className="theme__wrapper">
      <div className="theme__header">
        <h4>Theme</h4>
      </div>
      <div className="theme row">
        <div className="col-4 col-lg-4 col-6 col-md-6">
          <ThemeSkeleton themeName="dark" />
        </div>
        <div className="col-4 col-lg-4 col-6 col-md-6">
          <ThemeSkeleton themeName="light" />
        </div>
        <div className="col-4 col-lg-4 col-6 col-md-6">
          <ThemeSkeleton themeName="saffron" />
        </div>
        <div className="col-4 col-lg-4 col-6 col-md-6">
          <ThemeSkeleton themeName="pink" />
        </div>
        <div className="col-4 col-lg-4 col-6 col-md-6">
          <ThemeSkeleton themeName="blood-red" />
        </div>
      </div>
    </div>
  );
};

export default Themes;
