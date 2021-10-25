import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import Slide from '@components/2page/ko/Slide/Slide';
import EnSlide from '@components/2page/en/Slide/EnSlide';
import Layout from '@layouts/Layouts';

const Second = (props: any) => {
  var local = localStorage.getItem('language');
  var language = local.split('"');
  const selectedcity = props.match.params.selectedcity;
  const selectedcategory = props.match.params.selectedcategory;
  const history = props.history;

  return (
    <Layout>
        {language[1]==='KO' ?
          <>
          <h2 style={{borderColor:'black', border:'1px solid',}}>
            {selectedcity}의 {selectedcategory} 추천장소 TOP5{' '}
          </h2>
          <Slide selectedcity={selectedcity} selectedcategory={selectedcategory} history={history} />
          </>
          : <>
          <h2 style={{borderColor:'black', border:'1px solid',}}>
            TOP5 of {selectedcity}
          </h2>
          <EnSlide selectedcity={selectedcity} selectedcategory={selectedcategory} history={history} />
          </>
        }
     </Layout>
  );
};

export default Second;
