import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Layout() {
  return (
    <div className='w-full border border-black shadow-2xl max-w-[700px] flex flex-col'>
      <Header title={'React JS Blog'} />
      <Nav />
      <Outlet />  {/* This renders the matching child route */}
      <Footer />
    </div>
  );
}

export default Layout;
