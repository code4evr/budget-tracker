import React, { useState, useContext } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { USER_LOGIN } from '../../Queries/Queries';
import { useForm } from '../../utils/customHooks';
import { AuthContext } from '../../Context/AuthContext';
import './login.css';

const Login = props => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { handleInputChange, handleSubmit, val } = useForm(
    loginUser,
    {
      email: '',
      password: '',
    },
  );

  const [userLogin, { loading }] = useMutation(USER_LOGIN, {
    update(_, { data: { login: userData } }) {
      console.log(userData);
      context.login(userData);
      props.history.push('/app/home');
    },
    onError(err) {
      console.log(err.graphQLErrors[0].extensions.errors);
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
      setTimeout(() => {
        setErrors(null);
      }, 3000);
    },
  });

  function loginUser() {
    userLogin({ variables: { ...val } });
  }

  return (
    <div>
      <div className="container">
        <div
          className="row align-items-center"
          style={{ height: '100vh' }}
        >
          {errors
            ? Object.keys(errors).length > 0 && (
                <div className="col-6 offset-3">
                  <ul className="list-group">
                    {Object.values(errors).map(value => (
                      <li
                        key={value}
                        className="list-group-item list-group-item-danger"
                      >
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            : ''}
          <div className="col-6 offset-3 login-form px-5 py-3">
            <div className="d-flex flex-column align-items-center pb-3">
              <div className="brand-name">Budgetry</div>
              <div className="welcome">Welcome Back</div>
              <div className="login-msg">
                Please login to continue
              </div>
            </div>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={val.email}
                  onChange={handleInputChange}
                />
                {errors ? <div>{errors.email}</div> : ''}
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={val.password}
                  onChange={handleInputChange}
                />
                {errors ? <div>{errors.password}</div> : ''}
              </div>
              <div className="mb-3">
                <button className="btn btn-block btn-primary">
                  Login
                </button>
              </div>
              <div className="user-links">
                <div className="sign-up pb-2">
                  Don't have an account?{' '}
                  <span>
                    <Link to="/register">Register</Link>
                  </span>
                </div>
                <div className="fogot-password">
                  <Link to="/forgotpassword">Forgot password</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
