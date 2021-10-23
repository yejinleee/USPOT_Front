import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import Layout from '@layouts/Layouts';
import Controller from '@components/3page/ko/Controller/Controller';
import { History, LocationState } from 'history';
import EnController from '@components/3page/en/Controller/EnController';
interface Props {
  location: any;
  history: History<LocationState>;
  top5placeid : any;
}

const Third: FC<Props> = (props: Props) => {
  var local = localStorage.getItem('language');
  var language = local.split('"');
  console.log(props.location.state);
  return (
    <Layout>
      {language[1] === 'KO' ? (
<<<<<<< HEAD
        <Controller
          mapx={props.location.state.mapx}
          mapy={props.location.state.mapy}
          selectedplace={props.location.state.selectedplace}
          history={props.history}
        />
=======
        <Controller mapx={props.location.state.mapx} mapy={props.location.state.mapy} selectedplace={props.location.state.selectedplace} history={props.history} top5placeid={props.location.state.top5placeid} />
>>>>>>> 3a258dadfb70b027d52c0eecb3ee9bd96ff66f27
      ) : (
        <EnController
          mapx={props.location.state.mapx}
          mapy={props.location.state.mapy}
          selectedplace={props.location.state.selectedplace}
          history={props.history}
        />
      )}
    </Layout>
  );
};

export default Third;
