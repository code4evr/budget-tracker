import React from 'react';
import ThemeSkeleton from '../ThemeSkeleton/ThemeSkeleton';
import './themes.css';

const Themes = () => {
  return (
    <>
      <div className="settings-content-header">Theme</div>
      <div className="container">
        <div className="theme row">
          <div className="col-4 col-lg-4 col-6 col-md-6">
            <ThemeSkeleton themeName="Dark" classname="dark" />
          </div>
          <div className="col-4 col-lg-4 col-6 col-md-6">
            <ThemeSkeleton themeName="Light" classname="light" />
          </div>
          <div className="col-4 col-lg-4 col-6 col-md-6">
            <ThemeSkeleton themeName="Saffron" classname="saffron" />
          </div>
          <div className="col-4 col-lg-4 col-6 col-md-6">
            <ThemeSkeleton themeName="Pink" classname="pink" />
          </div>
          <div className="col-4 col-lg-4 col-6 col-md-6">
            <ThemeSkeleton
              themeName="Navy Blue"
              classname="navyBlue"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Themes;
