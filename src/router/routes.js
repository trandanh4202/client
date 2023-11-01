import { Navigate, createBrowserRouter } from 'react-router-dom';
import MainLayout from '~/layout/MainLayout/MainLayout';
import ProfileLayout from '~/layout/ProfileLayout/ProfileLayout';
import Cart from '~/pages/desktop/cart/Cart';
import CheckOut from '~/pages/desktop/checkout/CheckOut';
import Contact from '~/pages/desktop/contact/Contact';
import Home from '~/pages/desktop/home/Home';
import News from '~/pages/desktop/news/News';
import Policy from '~/pages/desktop/policy/Policy';
import Address from '~/pages/desktop/profile/Address/Address';
import OrderList from '~/pages/desktop/profile/OrderList/OrderList';
import Setting from '~/pages/desktop/profile/Setting/Setting';
import SingleProduct from '~/pages/desktop/singleProduct/SingleProduct';
import Store from '~/pages/desktop/store/Store';
import HomeMobile from '~/pages/mobile/home/HomeMobile';

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
        path: 'c',
        element: <Store />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'policy',
        element: <Policy />,
      },
      {
        path: 'profile',
        element: <ProfileLayout />,
        children: [
          {
            path: 'setting',
            element: <Setting />,
          },
          {
            path: 'address',
            element: <Address />,
          },
          {
            path: 'orderlist',
            element: <OrderList />,
          },
          {
            path: '*',
            element: <Navigate to="setting" />,
          },
        ],
      },
    ],
  },
  {
    path: 'test',
    element: <HomeMobile />,
  },
]);
const publicRoutes = [];

const privateRoutes = [];
export default router;
