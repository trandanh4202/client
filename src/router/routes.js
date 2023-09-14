import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '~/layout/MainLayout';
import Home from '~/pages/home/Home';
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
        path: 'team',
      },
      {
        path: 'orders',
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
