import React, { useEffect } from 'react';
import '@components/mypage/en/Search/Search.scss';
import EnCoursemap from '../Course/Coursemap';

const EnSearch = () => {
  return (
    <div className="myplacecontents">
      <div>Please select a departure point</div>
      <EnCoursemap />
    </div>
  );
};

export default EnSearch;
