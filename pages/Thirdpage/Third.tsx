import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import Layout from '@layouts/Layouts';
import Controller from '@components/Controller/Controller';
interface Props {
  location: any;
}
const Third: FC<Props> = ({ children, location }) => {
  return (
    <Layout>
      <Controller mapx={location.state.mapx} mapy={location.state.mapy} />
    </Layout>
  );
};

export default Third;
