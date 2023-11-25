// productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const getRcmSystem = createAsyncThunk('rcmSystem/getRcmSystem', async (_, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`api/Products/Foryou`, config);
  return response.data;
});

const rcmSystemSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRcmSystem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRcmSystem.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data;
      })
      .addCase(getRcmSystem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default rcmSystemSlice.reducer;
