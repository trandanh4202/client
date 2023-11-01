import { Search, ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Box, Container, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import Header from './header/Header';
import NavigationBottom from '~/components/BottomNavigation/BottomNavigation';
import Banner from './banner/Banner';
import Highlight from './highlight/Highlight';
import ProductSale from '~/pages/desktop/home/productSale/ProductSale';
import News from './news/News';
import Sales from './sales/Sales';
import CountUpMobile from './countup/CountUpMobile';
import BannerMid from './banner/BannerMid';

const HomeMobile = () => {
  return (
    <>
      <Header />
      <Box sx={{ position: 'relative', top: '-70px' }}>
        <Banner />
        <Container>
          <Highlight />
        </Container>
        <Sales />
        <BannerMid />
        <News />
        <CountUpMobile />
      </Box>
      <NavigationBottom />
    </>
  );
};

export default HomeMobile;
