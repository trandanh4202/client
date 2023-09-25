import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '~/layout/MainLayout';
import Cart from '~/pages/cart/Cart';
import CheckOut from '~/pages/checkout/CheckOut';
import Home from '~/pages/home/Home';
import Store from '~/pages/store/Store';
import SingleProduct from '../pages/home/singleProduct/SingleProduct';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: 'singleproduct',
        element: <SingleProduct />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'Checkout',
        element: <CheckOut />,
      },
      {
        path: 'store',
        element: <Store />,
      },
      {
        path: 'calendar',
      },
    ],
  },
  {
    path: 'login',
    // element: <Login />,
  },
]);
const publicRoutes = [];

const privateRoutes = [];
export default router;
