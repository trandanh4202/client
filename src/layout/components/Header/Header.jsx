import React from 'react';
import BottomNavigation from '~/components/BottomNavigation/BottomNavigation';
import HeaderMobile from '~/components/mobile/HeaderMobile/HeaderMobile';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import HeaderUpper from './HeaderUpper/HeaderUpper';

const Header = () => {
  return (
    <>
      <HeaderUpper />
      <HeaderBottom />
      <HeaderMobile />
      <BottomNavigation />
    </>
  );
};

export default Header;
