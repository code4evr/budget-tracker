import React, { createContext, useReducer, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const initialState = {
  user: null,
  timeFrame: 0,
};

const tokenDecode = () => {
  if (localStorage.getItem('jwt-token')) {
    const decodedToken = jwt_decode(
      localStorage.getItem('jwt-token'),
    );
    console.log(decodedToken);
    if (decodedToken.exp * 1000 < Date.now()) {
      console.log(Date.now());
      localStorage.removeItem('jwt-token');
    } else {
      initialState.user = decodedToken;
      initialState.timeFrame = decodedToken.exp * 1000 - Date.now();
    }
  }
};

tokenDecode();

const AuthContext = createContext({
  user: null,
  login: userData => {},
  logout: () => {},
});

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        timeFrame: action.payload.timeFrame,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        timeFrame: 0,
      };
    default:
      return state;
  }
};

const AuthProvider = props => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = userData => {
    localStorage.setItem('jwt-token', userData.token);
    tokenDecode();
    dispatch({
      type: 'LOGIN',
      payload: {
        user: initialState.user,
        timeFrame: initialState.timeFrame,
      },
    });
  };

  const logout = () => {
    localStorage.removeItem('jwt-token');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        timeFrame: state.timeFrame,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
