import React, { useEffect } from 'react';
import Layout from '@layouts/Layouts';
import Newcategory from '@components/2page/ko/Newcategory/Newcategory';

const Second = (props: any) => {
  var local = localStorage.getItem('language');
  const selectedcity = props.match.params.selectedcity;
  const history = props.history;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Newcategory selectedcity={selectedcity} history={history}/>
    </Layout>
  );
};

export default Second;
