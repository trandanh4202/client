import React from 'react';
import SliderSection from './banner/SliderSection';
import Highlight from './highlight/Highlight';
import CountUpHome from './countUp/CountUp';
import News from './news/News';
import Products from './products/Products';
import ProductSale from './productSale/ProductSale';
import BannerMid from './banner/BannerMid';
import Sliders from './sliders/Sliders';

const Home = () => {
  return (
    <>
      <SliderSection />
      <ProductSale />
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