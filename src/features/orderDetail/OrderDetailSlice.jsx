import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  detail: [],
  loading: false,
  error: null,
};

export const getOrderDetail = createAsyncThunk('orderDetail/getOrderDetail', async (id, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`/api/OrderDetails?orderId=${id}`, config);
  return response.data;
});

const OrderDetailSlice = createSlice({
  name: 'orderDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrderDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrderDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.detail = action.payload.data;
      })
      .addCase(getOrderDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default OrderDetailSlice.reducer;
