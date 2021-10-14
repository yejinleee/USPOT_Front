import React, { useCallback, useEffect, useState } from 'react';

const Logout = () => {
  const onClick = () => {
    console.log(localStorage.getItem('memberid'));
    localStorage.removeItem('memberid');
    console.log(localStorage.getItem('memberid'));
  };

  return (
    <>
      <button onClick={onClick}>Logout</button>
    </>
  );
};
export default Logout;
