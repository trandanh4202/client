import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  menus: [],
  loading: false,
  error: null,
};
// Thực hiện API tạo sản phẩm
export const getMenus = createAsyncThunk('menus/getMenus', async () => {
  const response = await axios.get('api/Menus');
  return response.data;
});

export const addMenus = createAsyncThunk('menus/addMenus', async (data) => {
  const response = await axios.post('api/Menus', data);
  return response.data;
});

const menuSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMenus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMenus.fulfilled, (state, action) => {
        state.loading = false;
        state.menus = action.payload.data;
      })
      .addCase(getMenus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addMenus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addMenus.fulfilled, (state, action) => {
        state.loading = false;
        state.menus = action.payload.data;
      })
      .addCase(addMenus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default menuSlice.reducer;
