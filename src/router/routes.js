import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '~/layout/MainLayout';
import Home from '~/pages/home/Home';
import A from '~/pages/home/singleProduct/A';
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
        path: 'orders',
        element: <A />,
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
