import React from 'react';
import SliderSection from './banner/SliderSection';
import Highlight from './highlight/Highlight';
import CountUpHome from './countUp/CountUp';
import News from './news/News';
import Products from './products/Products';
import ProductSale from './productSale/ProductSale';

const Home = () => {
  return (
    <>
      <SliderSection />
      <ProductSale />
      <Highlight />
      <CountUpHome />
      <Products />
      <News />
    </>
  );
};

export default Home;
