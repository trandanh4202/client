// categorySlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  categories: [],
  loading: false,
  error: null,
};
export const getCategories = createAsyncThunk('categories/getCategories', async () => {
  const response = await axios.get('/api/Categories');
  return response.data;
});

export const addCategory = createAsyncThunk('categories/addCategory', async (categoryData, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const message = await axios.post('/api/Categories', categoryData, config);
  const response = await axios.get('/api/Categories');

  return response.data;
});
export const putCategory = createAsyncThunk('categories/putCategory', async (categoryData, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(categoryData);
  const message = await axios.put(`/api/Categories/${categoryData.id}`, categoryData, config);
  const response = await axios.get('/api/Categories');

  return response.data;
});

export const deleteCategory = createAsyncThunk('categories/deleteCategory', async (categoryData, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const message = await axios.delete(`/api/Categories/${categoryData}`, config);
  const response = await axios.get('/api/Categories');

  return response.data;
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.data;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.data;
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.data;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(putCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(putCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.data;
      })
      .addCase(putCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
