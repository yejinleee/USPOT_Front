import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutClickevent } from './changeLoginStatus';

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <button>
      onClick=
      {() => {
        localStorage.removeItem('token');
        dispatch(logoutClickevent());
      }}
      LOGOUT
    </button>
  );
};

export default Logout;
