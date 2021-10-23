import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import Slide from '@components/2page/ko/Slide/Slide';
import Layout from '@layouts/Layouts';

const Second = (props: any) => {
  const selectedcity = props.match.params.selectedcity;
  const selectedcategory = props.match.params.selectedcategory;
  const history = props.history;
  return (
    <Layout>
      <h2>
        {selectedcity}의 {selectedcategory} 추천장소 TOP5{' '}
      </h2>
      <Slide selectedcity={selectedcity} selectedcategory={selectedcategory} history={history} />
    </Layout>
  );
};

export default Second;
