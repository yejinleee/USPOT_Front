import React, { FC } from 'react';
import { ReactPropTypes } from 'react';

interface Props {
  city : string;
}

const Province : FC<Props> = ({children, city }) => {

  return (
    <div>{city}</div>
  )
}
export default Province;