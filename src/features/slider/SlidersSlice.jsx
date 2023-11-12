import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  sliders: [],
  loading: false,
  error: null,
};

export const getSliders = createAsyncThunk('slider/getSliders', async () => {
  const response = await axios.get(`api/slugs/slider`);
  return response;
});

const slidersSlice = createSlice({
  name: 'sliders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSliders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSliders.fulfilled, (state, action) => {
        state.loading = false;
        state.sliders = action.payload.data.data;
      })
      .addCase(getSliders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default slidersSlice.reducer;
