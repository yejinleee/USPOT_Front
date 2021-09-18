import React, {FC, memo, useMemo, useState} from 'react';
import Slide from "@components/Slide/Slide";
import Layout from '@components/Layouts';

const Second=(props:any)=> {
  const selectedcity = props.match.params.selectedcity;
  const selectedcategory = props.match.params.selectedcategory;

  return (
    <Layout>
      <h2>{selectedcity}의 {selectedcategory} 추천장소 TOP5 </h2>
      <Slide city={selectedcity} />
    </Layout>
  );

}

export default Second;