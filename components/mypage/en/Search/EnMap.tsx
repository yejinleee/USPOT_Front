import React from 'react';
import { FC } from 'react';

interface Props {
  searchPlace: string;
}

const Map: FC<Props> = ({ children, searchPlace }) => {
  return <div>hi</div>;
};

export default React.memo(Map);
