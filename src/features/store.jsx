import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products/productsSlice';
import singleProductReducer from './singleProduct/singleProductSlice';

import authReducer from './auth/authSlice';
import categoriesReducer from './category/categoriesSlice';
import brandsReducer from './brands/brandsSlice';
import reviewsReducer from './reviews/reviewsSlice';
import addressesReducer from './address/addressSlice';
import ghnReducer from './GHN/ghnSlice';
import slidersReducer from './slider/SlidersSlice';
import imagesReducer from './images/ImagesSlice';
import cartItemsReducer from './cartItems/cartItemsSlice';
import menusReducer from './menu/menuSlice';
import CaculateOrdersReducer from './CaculateOrders/CaculateOrdersSlice';
import orderReducer from './order/orderSlice';
import OrderDetailReducer from './orderDetail/OrderDetailSlice';
import attributesReducer from './attributeProduct/attributeProductSlice';
import countViewReducer from './view/countViewSlice';
import statisticsReducer from './statistics/statisticsSlice';
import rcmSystemRuducer from './recommendSystem/RecommendSystemSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    singleProduct: singleProductReducer,
    auth: authReducer,
    categories: categoriesReducer,
    brands: brandsReducer,
    reviews: reviewsReducer,
    addresses: addressesReducer,
    ghn: ghnReducer,
    sliders: slidersReducer,
    images: imagesReducer,
    cartItems: cartItemsReducer,
    menus: menusReducer,
    CaculateOrders: CaculateOrdersReducer,
    orders: orderReducer,
    orderDetail: OrderDetailReducer,
    attributes: attributesReducer,
    view: countViewReducer,
    statistics: statisticsReducer,
    rcmSystem: rcmSystemRuducer,
  },
});
