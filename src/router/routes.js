import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { Navigate, createBrowserRouter, useNavigate } from 'react-router-dom';
import MainLayout from '~/layout/MainLayout/MainLayout';
import ProfileLayout from '~/layout/ProfileLayout/ProfileLayout';
import Cart from '~/pages/desktop/cart/Cart';
import CheckOut from '~/pages/desktop/checkout/CheckOut';
import Contact from '~/pages/desktop/contact/Contact';
import Home from '~/pages/desktop/home/Home';
import News from '~/pages/desktop/news/News';
import OrderDetail from '~/pages/desktop/orderDetail/OrderDetail';
import Policy from '~/pages/desktop/policy/Policy';
import Address from '~/pages/desktop/profile/Address/Address';
import OrderList from '~/pages/desktop/profile/OrderList/OrderList';
import Setting from '~/pages/desktop/profile/Setting/Setting';
import SingleProduct from '~/pages/desktop/singleProduct/SingleProduct';
import Store from '~/pages/desktop/store/Store';
import HomeMobile from '~/pages/mobile/home/HomeMobile';
import PrivateRoutes from './PrivateRoutes';
import AdminRoutes from './AdminRoutes';
import Dashboard from '~/pages/admin/dashboard/Dashboard';
import Brand from '~/pages/admin/brand/Brand';
import Product from '~/pages/admin/product/Product';
import Campaign from '~/pages/admin/campaign/Campaign';
import Login from '~/pages/admin/login/Login';
import HomeAdmin from '~/pages/admin/home/HomeAdmin';
import EnhancedTable from '~/pages/admin/category/Category';
import Category from '~/pages/admin/category/Category';
import ManagerUser from '~/pages/admin/user/ManageUser';

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
        path: ':id',
        element: <SingleProduct />,
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
        element: <PrivateRoutes />,
        children: [
          {
            path: 'cart',
            element: <Cart />,
          },
          {
            path: 'Checkout',
            element: <CheckOut />,
          },
          {
            path: 'orders/:id',
            element: <OrderDetail />,
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
    ],
  },
  {
    path: '/admin',
    // element: <AdminRoutes />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          { path: '', element: <HomeAdmin /> },
          {
            path: 'brand',
            element: <Brand />,
          },
          {
            path: 'category',
            element: <Category />,
          },
          {
            path: 'product',
            element: <Product />,
          },
          {
            path: 'campaign',
            element: <Campaign />,
          },
          {
            path: 'manageuser',
            element: <ManagerUser />,
          },
        ],
      },
      {
        path: 'test',
        element: <EnhancedTable />,
      },
    ],
  },
]);
const publicRoutes = [];

const privateRoutes = [];
export default router;
