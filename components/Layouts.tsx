import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Layouts.scss';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className="Layout">
      <Header />

      <main className="Main">{props.children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
