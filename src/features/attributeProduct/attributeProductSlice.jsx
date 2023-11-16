import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  attributes: [],
  loading: false,
  error: null,
};

export const getAttribues = createAsyncThunk('attributes/getAttributes', async ({ id }) => {
  const response = await axios.get(`api/AttributeSpecs/${id}`);
  return response.data;
});

const attributesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAttribues.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAttribues.fulfilled, (state, action) => {
        state.loading = false;
        state.attributes = action.payload.data;
      })
      .addCase(getAttribues.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default attributesSlice.reducer;
