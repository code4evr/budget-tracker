import React from 'react';
import { BsGearFill, BsPlusCircle } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expandd-lg navbar-light bg-light mt-2 py-3">
      <div className="container-fluid pr-0">
        <ul className="navbar-nav ml-auto mb mb-lg-0 flex-row">
          <li className="nav-item pr-2">
            <BsPlusCircle size="1.65rem" />
          </li>
          <li className="nav-item pl-3">
            <BsGearFill size="1.65rem" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
