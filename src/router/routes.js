import { Navigate, createBrowserRouter } from 'react-router-dom';
import MainLayout from '~/layout/MainLayout/MainLayout';
import Cart from '~/pages/cart/Cart';
import CheckOut from '~/pages/checkout/CheckOut';
import Home from '~/pages/home/Home';
import Store from '~/pages/store/Store';
import SingleProduct from '../pages/home/singleProduct/SingleProduct';
import Contact from '~/pages/contact/Contact';
import News from '~/pages/news/News';
import Policy from '~/pages/policy/Policy';
import ProfileLayout from '~/layout/ProfileLayout/ProfileLayout';
import Setting from '~/pages/profile/Setting/Setting';
import Address from '~/pages/profile/Address/Address';
import OrderList from '~/pages/profile/OrderList/OrderList';
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
    path: 'login',
    // element: <Login />,
  },
]);
const publicRoutes = [];

const privateRoutes = [];
export default router;
