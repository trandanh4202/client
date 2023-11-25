// brandsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  brands: [],
  loading: false,
  error: null,
};
// Thực hiện API tạo sản phẩm
export const getBrands = createAsyncThunk('brands/getBrands', async () => {
  const response = await axios.get('/api/brands');
  return response.data;
});
export const addBrand = createAsyncThunk('brands/addBrand', async (brandData, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const message = await axios.post('/api/Brands', brandData, config);
  const response = await axios.get('/api/Brands');
  return response.data;
});

export const deleteBrand = createAsyncThunk('brands/deleleBrand', async (brandData, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const message = await axios.delete(`/api/Brands/${brandData}`, config);
  const response = await axios.get('/api/Brands');

  return response.data;
});
export const putBrand = createAsyncThunk('brands/putBrand', async (brandData, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const message = await axios.put(`/api/Brands/${brandData.id.trim()}`, brandData, config);
  const response = await axios.get('/api/Brands');
  return response.data;
});

const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload.data;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addBrand.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBrand.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload.data;
      })
      .addCase(addBrand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteBrand.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBrand.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload.data;
      })
      .addCase(deleteBrand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(putBrand.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(putBrand.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload.data;
      })
      .addCase(putBrand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default brandsSlice.reducer;
