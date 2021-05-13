import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { USER_REGISTRATION } from '../../Queries/Queries';
import { useForm } from '../../utils/customHooks';

const Registration = () => {
  const history = useHistory();
  const [visible, setVisible] = useState({
    passwordFocus: false,
    // passwordBlur: false,
    confirmPasswordFocus: false,
    // confirmPasswordBlur: false
  });

  const [errors, setErrors] = useState({});

  const { handleInputChange, handleSubmit, val } = useForm(
    userRegister,
    {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  );

  const [userRegistration, { loading }] = useMutation(
    USER_REGISTRATION,
    {
      update: (_, result) => {
        console.log(result);
        history.push('/login');
      },
      onError: err => {
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
      },
    },
  );

  const { passwordFocus, confirmPasswordFocus } = visible;

  const handleInteraction = action => e => {
    if (action === 'focus') {
      setVisible({
        ...visible,
        passwordFocus: true,
        confirmPasswordFocus: false,
      });
    } else if (action === 'blur') {
      setVisible({
        ...visible,
        passwordFocus: false,
        confirmPasswordFocus: false,
      });
    } else if (action === 'focusConfirm') {
      setVisible({
        ...visible,
        confirmPasswordFocus: true,
        passwordFocus: false,
      });
    } else if (action === 'blurConfirm') {
      setVisible({
        ...visible,
        confirmPasswordFocus: false,
        passwordFocus: false,
      });
    }
  };

  function userRegister() {
    userRegistration({ variables: { ...val } });
  }

  return (
    <div>
      <div className="container">
        <div
          className="row align-items-center"
          style={{ height: '100vh' }}
        >
          <div className="col-6 offset-3 login-form px-5 py-3">
            <div className="d-flex flex-column align-items-center pb-3">
              <div className="brand-name">Budgetry</div>
              <div className="welcome">Create your account</div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={val.name}
                  onChange={handleInputChange('name')}
                />
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={val.email}
                  onChange={handleInputChange('email')}
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  onFocus={handleInteraction('focus')}
                  onBlur={handleInteraction('blur')}
                  value={val.password}
                  onChange={handleInputChange('password')}
                />
                {passwordFocus ? (
                  <div id="passwordHelpBlock" class="form-text">
                    Your password must be 8-20 characters long
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className="mb-3">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  onFocus={handleInteraction('focusConfirm')}
                  onBlur={handleInteraction('blurConfirm')}
                  value={val.confirmPassword}
                  onChange={handleInputChange('confirm')}
                />
                {confirmPasswordFocus ? (
                  <div id="passwordHelpBlock" class="form-text">
                    Password must match
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className="mb-3">
                <button className="btn btn-block btn-primary">
                  Register
                </button>
              </div>
              <div className="user-links">
                <div className="sign-up pb-2">
                  Already have an account?{' '}
                  <span>
                    <Link to="/login">Login</Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
