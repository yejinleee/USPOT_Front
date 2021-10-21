import React, { useCallback, useEffect, useState } from 'react';

const Logout = () => {
  const onClick = () => {
    localStorage.removeItem('memberid');
  };

  return (
    <>
      <button onClick={onClick}>Logout</button>
    </>
  );
};
export default Logout;
