import React, { useState } from 'react';
import { BsGearFill, BsPlusCircle } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import Settings from '../Settings/Settings';
import { useOutsideClick } from '../../utils/customHooks';
import './navbar.css';

const Navbar = props => {
  const [toggle, setToggle] = useState(false);

  const clickRef = useOutsideClick(() => {
    setToggle(!toggle);
  });

  const handleClick = () => {
    setToggle(!toggle);
  };

  console.log(toggle);

  return (
    <>
      <div
        className={
          props.val
            ? 'nav-container nav-container-grow'
            : 'nav-container'
        }
      >
        <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2 py-3">
          <div className="container-fluid pr-0">
            <ul className="navbar-nav mr-auto mb mb-lg-0 flex-row">
              <li className="nav-item">
                <FaBars
                  size="1.65rem"
                  onClick={() => props.onclick()}
                />
              </li>
            </ul>
            <ul className="navbar-nav ml-auto mb mb-lg-0 flex-row">
              <li className="nav-item pr-2">
                <BsPlusCircle size="1.65rem" />
              </li>
              <li className="nav-item pl-3" onClick={handleClick}>
                <BsGearFill size="1.65rem" />
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {toggle ? (
        <div ref={clickRef} className="settings-container">
          <Settings />
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Navbar;
