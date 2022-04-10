import React, { useEffect } from 'react';
import Toggle from '@components/1page/ko/Toggle/Toggle';
import Layouts from '@layouts/Layouts';
import EnToggle from '@components/1page/en/Toggle/EnToggle';
import ToggleApp from '@components/1page/ko/Toggle/ToggleApp';

const HomePage = () => {
  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'KO');
  }

  var local = localStorage.getItem('language');
  var language = local.split('"');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Layouts>{language[1] === 'KO' ? <ToggleApp /> : <EnToggle />}</Layouts>
    </>
  );
};

export default HomePage;
