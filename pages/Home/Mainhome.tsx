import React from 'react';
import Toggle from '@components/1page/ko/Toggle/Toggle';
import Layouts from '@layouts/Layouts';
import EnToggle from '@components/1page/en/Toggle/EnToggle';

const HomePage = () => {
  var local = localStorage.getItem('language');
  var language = local.split('"');
  return (
    <>
      <Layouts>{language[1] === 'KO' ? <Toggle /> : <EnToggle />}</Layouts>;
    </>
  );
};

export default HomePage;
