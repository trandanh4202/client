import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  fee: [],
  loading: false,
  error: null,
};

export const CaculateOrders = createAsyncThunk('CaculateOrders/fee', async (data, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`api/CaculateOrders`, data, config);
  return response.data;
});

const CaculateOrdersSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CaculateOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(CaculateOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.fee = action.payload.data;
      })
      .addCase(CaculateOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default CaculateOrdersSlice.reducer;
