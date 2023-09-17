import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '~/layout/MainLayout';
import Cart from '~/pages/cart/Cart';
import Home from '~/pages/home/Home';
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
        path: 'products',
      },
      {
        path: 'create-product',
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
