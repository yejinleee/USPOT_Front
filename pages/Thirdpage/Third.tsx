import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import Layout from '@layouts/Layouts';
import Controller from '@components/Controller/Controller';
import EnController from '@components/Controller/EnController';
interface Props {
  location: any;
}
const Third: FC<Props> = ({ children, location }) => {
  var local = localStorage.getItem('language');
  var language = local.split('"');
  return (
    <Layout>
      {language[1] === 'KO' ? (
        <Controller mapx={location.state.mapx} mapy={location.state.mapy} />
      ) : (
        <EnController mapx={location.state.mapx} mapy={location.state.mapy} />
      )}
    </Layout>
  );
};

export default Third;
