import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ScrollToTopButton from '~/features/scrrollToTop/ScrolllToTop';
import Chatbot from '~/features/chatbot/Chatbot';
import { Box } from '@mui/material';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />

      <Chatbot />
      <ScrollToTopButton />
    </>
  );
};

export default MainLayout;
