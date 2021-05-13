import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
