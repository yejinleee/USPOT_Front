import React, { FC } from 'react';
import { ReactPropTypes } from 'react';

interface Props {
  city : string;
}

const Citylist : FC<Props> = ({children, city }) => {

  return (
    <div>{city}</div>
  )
}
export default Citylist;