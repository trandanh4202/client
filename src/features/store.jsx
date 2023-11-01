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
  },
});
