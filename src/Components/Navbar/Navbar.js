import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBudgetModal } from '../../Redux/toggleModalSlice';
import { BsGearFill, BsPlusCircle } from 'react-icons/bs';
import { FaBars, FaPlus, FaCog } from 'react-icons/fa';
import Settings from '../Settings/Settings';
import { useOutsideClick } from '../../utils/customHooks';
import './navbar.css';

const Navbar = props => {
  const dispatch = useDispatch();
  const toggleVal = useSelector(state => state.modal);
  const [toggle, setToggle] = useState(false);

  const clickRef = useOutsideClick(() => {
    setToggle(!toggle);
  });

  const handleClick = handler => e => {
    if (handler === 'settings') {
      setToggle(!toggle);
    } else if (handler === 'newBudget') {
      dispatch(
        toggleBudgetModal({
          val: !toggleVal.toggleBudget,
        }),
      );

      document.body.style.position = 'fixed';
    }
  };

  console.log(toggle);

  return (
    <>
      <nav className={props.val ? 'navbar navbar-toggle' : 'navbar'}>
        <div className="container-fluid">
          <ul className="navbar-nav mr-auto mb mb-lg-0 flex-row">
            <li className="nav-item">
              <FaBars
                size="1.15rem"
                onClick={() => props.onclick()}
              />
            </li>
          </ul>
          <ul className="navbar-nav ml-auto mb mb-lg-0 flex-row">
            <li
              className="nav-item pr-2"
              onClick={handleClick('newBudget')}
            >
              <FaPlus size="1.35rem" />
            </li>
            <li
              className="nav-item pl-3"
              onClick={handleClick('settings')}
            >
              <FaCog size="1.35rem" />
            </li>
          </ul>
        </div>
      </nav>
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
