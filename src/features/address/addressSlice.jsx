import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  addresses: [],
  address: [],
  loading: false,
  error: null,
};
// Thực hiện API login
export const getAddresses = createAsyncThunk('addresses/getADdresses', async (_, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}
        `,
    },
  };
  try {
    const response = await axios.get('https://cuong.hahaho.me/api/Addresses', config);

    return response.data;
  } catch (error) {
    // Xử lý lỗi nếu cần thiết
    throw error;
  }
});

export const createAddresses = createAsyncThunk('addresses/createAddresses', async (addressData, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const data = await axios.post('/api/Addresses', addressData, config);
  const response = await axios.get('/api/Addresses', config);
  console.log(addressData);
  return response.data;
});

export const deleteAddresses = createAsyncThunk('addresses/deleteAddresses', async (id, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(id);
  const data = await axios.delete(`/api/Addresses/${id}`, config);
  console.log(data);
  const response = await axios.get('/api/Addresses', config);

  return response.data;
});

export const putAddresses = createAsyncThunk('addresses/putAddresses', async (addressData, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(addressData);

  const messsage = await axios.put(`/api/Addresses/${addressData.id}`, addressData, config);
  const response = await axios.get('/api/Addresses', config);

  return response.data;
});

export const getAddressById = createAsyncThunk('addresses/getAddressById', async (id, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const messsage = await axios.get('api/Addresses', id, config);
  const response = await axios.get('api/Address', config);

  return response.data;
});

const addressesSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = action.payload.data;
      })
      .addCase(getAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = action.payload.data;
      })
      .addCase(createAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = action.payload.data;
      })
      .addCase(deleteAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(putAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(putAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = action.payload.data;
      })
      .addCase(putAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default addressesSlice.reducer;
