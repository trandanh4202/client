import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  cartItems: [],
  loading: false,
  error: null,
};
// Thực hiện API tạo sản phẩm
export const getCartItems = createAsyncThunk('cartItems/getCartItems', async (_, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get('api/CartItems', config);
  return response.data;
});
export const deleteCartItems = createAsyncThunk('cartItems/deleteCartItems', async (id, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const handle = await axios.delete(`api/CartItems/${id}`, config);
  const response = await axios.get('api/CartItems', config);
  return response.data;
});
export const addCartItems = createAsyncThunk('cartItems/addCartItems', async (data, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const handle = await axios.post(`api/CartItems/`, data, config);
  const response = await axios.get('api/CartItems', config);
  return response.data;
});

export const updateCartItems = createAsyncThunk('cartItems/updatecartItems', async (data, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const handle = await axios.put(`api/CartItems/${data.productId}`, data, config);
  const response = await axios.get('api/CartItems', config);
  return response.data;
});
const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(deleteCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(addCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload.data;
      })
      .addCase(updateCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default cartItemsSlice.reducer;
