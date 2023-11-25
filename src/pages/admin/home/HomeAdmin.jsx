import { Grid, Paper, Tooltip, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { getStatistics } from '~/features/statistics/statisticsSlice';

const HomeAdmin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStatistics({}));
  }, [dispatch]);
  const statistics = useSelector((state) => state.statistics?.statistics);
  const loading = useSelector((state) => state.statistics?.loading);
  return (
    <Grid container spacing={3}>
      <Grid item lg={4}>
        <Paper sx={{ padding: '20px', textAlign: 'left' }}>
          <Typography variant="h5">Tổng đơn hàng đã đặt: {statistics.amountOrder}</Typography>
          <Typography variant="h5">Tổng sản phẩm đã đặt: {statistics.amountProduct}</Typography>
          <Typography variant="h5">Tổng doanh thu: {statistics.amountRevenue}</Typography>
        </Paper>
      </Grid>
      <Grid item lg={4}>
        <Paper sx={{ padding: '20px', textAlign: 'center' }}>
          {/* Create a bar chart for orders */}
          <ResponsiveContainer width="100%" height={300}>
            {statistics?.order ? (
              <BarChart data={Object.entries(statistics.order)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="0" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="1" fill="#8884d8" />
              </BarChart>
            ) : (
              <p>No data available</p>
            )}
          </ResponsiveContainer>
        </Paper>
      </Grid>

      <Grid item lg={4}>
        <Paper sx={{ padding: '20px', textAlign: 'center' }}>{/* Display other statistics? or another chart */}</Paper>
      </Grid>
      <Grid item lg={6}>
        <Paper sx={{ padding: '20px', textAlign: 'center' }}>
          {/* Create a bar chart for amountGroupByBrand */}
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={statistics?.amountGroupByBrand}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
      <Grid item lg={6}>
        <Paper sx={{ padding: '20px', textAlign: 'center' }}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={statistics?.amountGroupByCategory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomeAdmin;
