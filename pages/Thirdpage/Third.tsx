import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import Layout from '@layouts/Layouts';
import Controller from '@components/Controller/Controller';
import EnController from '@components/Controller/EnController';
import { History, LocationState } from 'history';
interface Props {
  location: any;
  history: History<LocationState>;
  top5placeid : any;
}

const Third: FC<Props> = (props: Props) => {
  // console.log('third top5placeid',props.location.state.top5placeid);  // Slide에서 2 1 4 5 3 중에 누른 숫자

  var local = localStorage.getItem('language');
  var language = local.split('"');
  return (
    <Layout>
      {language[1] === 'KO' ? (
        <Controller mapx={props.location.state.mapx} mapy={props.location.state.mapy} selectedplace={props.location.state.selectedplace} history={props.history} top5placeid={props.location.state.top5placeid} />
      ) : (
        <EnController mapx={props.location.state.mapx} mapy={props.location.state.mapy} history={props.history} />
      )}
    </Layout>
  );
};

export default Third;
