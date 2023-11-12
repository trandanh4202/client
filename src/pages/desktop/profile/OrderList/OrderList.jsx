import { LocationOnTwoTone } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, List, ListItem, Paper, Tab, Tabs, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import OrderCard from '~/components/orderCard/OrderCard';
import ProductCard from '~/components/productCard/ProductCard';
import { getOrders } from '~/features/order/orderSlice';

const OrderList = () => {
  const [value, setValue] = useState('1');
  const location = useLocation();

  // useEffect(() => {
  //   // Lấy giá trị 'tab' từ URL nếu có
  //   const searchParams = new URLSearchParams(location.search);
  //   const tabParam = searchParams.get('tab');

  //   // Cập nhật giá trị 'tab' từ URL
  //   if (tabParam) {
  //     setTab(tabParam);
  //   }
  // }, [location]);
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  // const [tab, setTab] = useState('1');
  // const handleChangeTab = () => {
  //   setTab();
  // };
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  return (
    <>
      {/* <Paper sx={{ marginBottom: '10px', padding: '10px' }}>
        <Box>
          <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>Quản lý đơn hàng</Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '20px',
            }}
          >
            <Box
              value="1"
              onClick={(e) => setTab(e.target.value)}
              to="?tab=1"
              className={tab === '1' ? 'active-tab' : ''}
              component={Link}
              sx={{ fontSize: '9px', lineHeight: '30px' }}
            >
              {' '}
              Đang chờ xác nhận
            </Box>
            <Box
              value="2"
              onClick={(e) => setTab(e.target.value)}
              className={tab === '2' ? 'active-tab' : ''}
              to="?tab=2"
              sx={{ fontSize: '9px', lineHeight: '30px' }}
              component={Link}
            >
              Đang giao hàng
            </Box>
            <Box
              value="3"
              onClick={(e) => setTab(e.target.value)}
              className={tab === '3' ? 'active-tab' : ''}
              to="?tab=3"
              component={Link}
              sx={{ fontSize: '9px', lineHeight: '30px' }}
            >
              Hoàn thành
            </Box>
          </Box>
        </Box>
      </Paper> */}
      <Paper sx={{ minHeight: '400px' }}>
        <Box sx={{ padding: '20px 0', textAlign: 'center' }}>
          <Typography sx={{ fontSize: '20px', fontWeight: '600' }}>Quản lý đơn hàng</Typography>
        </Box>
        {orders.map((order) => (
          <OrderCard id={order.id} status={order.status} date={order.date} paidAt={order.paidAt} total={order.total} />
        ))}
      </Paper>
    </>
  );
};

export default OrderList;
