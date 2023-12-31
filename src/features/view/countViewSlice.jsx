import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  view: {},
  loading: false,
  error: null,
};

export const countView = createAsyncThunk('views/countView', async (id, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(`/api/Views?productId=${id}`, null, config);
  return response.data;
});

const countViewSlice = createSlice({
  name: 'views',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(countView.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(countView.fulfilled, (state, action) => {
        state.loading = false;
        state.view = action.payload;
      })
      .addCase(countView.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default countViewSlice.reducer;
