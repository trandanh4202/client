import React, { useEffect, useState } from 'react';
import SliderSection from './banner/SliderSection';
import Highlight from './highlight/Highlight';
import CountUpHome from './countUp/CountUp';
import News from './news/News';
import Products from './products/Products';
import ProductSale from './productSale/ProductSale';
import BannerMid from './banner/BannerMid';
import Sliders from './sliders/Sliders';
import RcmSystem from './rcmSystem/RcmSystem';

const Home = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <SliderSection />
      <ProductSale />
      <RcmSystem />
      <Highlight />
      <BannerMid />
      <Sliders />
      <CountUpHome />
      <Products />
      <News />
    </>
  );
};

export default Home;
