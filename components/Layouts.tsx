import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layouts = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layouts;
