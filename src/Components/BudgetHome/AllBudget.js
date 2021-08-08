import React, {
  useState,
  useContext,
  useEffect,
  useRef,
} from 'react';
import AddBudgetImg from '../../assets/undraw_new_entries_nh3h.svg';
import { BsPlusCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { clickCheckbox } from '../../Redux/toggleUtilityButton';
import BudgetList from './BudgetList';
import BudgetForm from './BudgetForm';
import { GET_BUDGETS } from '../../Queries/Queries';
import { today } from '../../assets/date';
import { useHistory, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { AuthContext } from '../../Context/AuthContext';
import './budgethome.css';

const AllBudget = props => {
  // redux state code
  const dispatch = useDispatch();
  const toggleVal = useSelector(state => state.utility);
  console.log(toggleVal);
  const checkBoxRef = useRef([]);
  checkBoxRef.current = [];
  const handleInputChange = e => {
    console.log(`${e.target.name} is ${e.target.checked}`);
    // if (checkBoxRef.current) {
    //   checkBoxRef.current.map(c =>
    //     c.name === e.target.name ? true : '',
    //   );
    // }
    let indeterminateCheck = checkBoxRef.current.find(
      c => c.checked === true,
    );
    console.log(indeterminateCheck);
    dispatch(
      clickCheckbox({
        ...toggleVal,
        isIndeterminate: indeterminateCheck ? true : false,
      }),
    );
  };

  const history = useHistory();
  // get auth from AuthContext
  const { user, timeFrame } = useContext(AuthContext);
  console.log(user);

  // boolean for toggling budget form
  const [bool, setBool] = useState(false);

  const result = useQuery(GET_BUDGETS);

  const handleClick = handler => e => {
    if (handler === 'new-budget') {
      setBool(!bool);
    } else if (handler === 'cancel') {
      setBool(!bool);
    } else if (handler === 'save') {
      console.log('create button clicked');
    }
  };

  useEffect(() => {
    if (user) {
      console.log('inside use effect');
      setTimeout(() => {
        window.location.reload();
        console.log('reloaded');
      }, timeFrame);
    }
  }, [user]);

  useEffect(() => {
    console.log('all budget useEffect run');
    if (toggleVal.isChecked) {
      checkBoxRef.current.map(
        c => (c.checked = toggleVal.toggleUtility),
      );
    } else {
      checkBoxRef.current.map(
        c => (c.checked = toggleVal.toggleUtility),
      );
    }
  }, [toggleVal.isChecked]);

  useEffect(() => {
    if (!toggleVal.isIndeterminate) {
      checkBoxRef.current.map(
        c => (c.checked = toggleVal.toggleUtility),
      );
    }
  }, [toggleVal.isIndeterminate]);

  if (result.loading) {
    return <div>Loading...</div>;
  }

  const addToRefs = el => {
    if (el && !checkBoxRef.current.includes(el)) {
      checkBoxRef.current.push(el);
    }
  };

  return (
    <>
      {user ? (
        <>
          {result.data.getBudgets.length > 0 ? (
            <>
              {result.data.getBudgets.map((b, i) => (
                <BudgetList
                  checkRef={addToRefs}
                  nameAttrib={i}
                  key={b.id}
                  budgetId={b.id}
                  budgetname={b.title}
                  // checked={toggleVal.isChecked ? true : false}
                  onchange={handleInputChange}
                />
              ))}
              {bool ? (
                <BudgetForm onclick={handleClick} />
              ) : (
                <div className="row">
                  <div
                    className="create-budget col-sm-12"
                    onClick={handleClick('new-budget')}
                  >
                    <span>
                      <BsPlusCircleFill />
                    </span>
                    <span className="pl-2 pt-1">
                      Create New Budget
                    </span>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="row mt-3">
              <div className="col-sm-12">
                <div className="today">
                  <span>Today</span>{' '}
                  <span className="date-today">{today}</span>
                </div>
                {!bool ? (
                  <div
                    className="mt-2 d-flex align-items-center create-budget"
                    onClick={handleClick('new-budget')}
                  >
                    <span>
                      <BsPlusCircleFill />
                    </span>
                    <span className="pl-2 pt-1">
                      Create New Budget
                    </span>
                  </div>
                ) : (
                  ''
                )}
                {bool ? (
                  <BudgetForm onclick={handleClick} />
                ) : (
                  <div className="img-container d-flex justify-content-center align-items-center">
                    <img
                      src={AddBudgetImg}
                      alt="add-budget"
                      className="add-budget"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default AllBudget;
