import { Search, ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Container, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import Header from './header/Header';
import NavigationBottom from '~/components/BottomNavigation/BottomNavigation';
import Banner from './banner/Banner';

const HomeMobile = () => {
  return (
    <>
      <Header />
      <Banner />
      <NavigationBottom />
    </>
  );
};

export default HomeMobile;
