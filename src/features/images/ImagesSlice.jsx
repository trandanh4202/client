import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  images: [],
  loading: false,
  error: null,
};

export const getImages = createAsyncThunk('images/getImages', async ({ id }) => {
  const response = await axios.get(`api/Documents?productId=${id}`);
  return response.data;
});

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload.data;
      })
      .addCase(getImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default imagesSlice.reducer;
