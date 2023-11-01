import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  account: localStorage.getItem('account') ? JSON.parse(localStorage.getItem('account')) : {},
  register: false,
  loading: false,
  error: null,
  profile: null,
};
// Thực hiện API login
export const login = createAsyncThunk('auth/login', async (loginData) => {
  const response = await axios.post('api/Auth/Login', loginData);
  const { token, expire, role } = response.data.data;
  console.log(loginData);
  const account = {
    token,
    expire,
    role,
  };
  // Save the account object to localStorage
  localStorage.setItem('account', JSON.stringify(account));
  return response.data;
});

export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
  const response = await axios.post('api/Auth/Register', userData);
  return response.data;
});
export const getProfile = createAsyncThunk('auth/getProfile', async (_, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(token);
  try {
    const response = await axios.get('/api/Auth/Profile', config);

    console.log(response);
    return response.data;
  } catch (error) {
    // Xử lý lỗi nếu cần thiết
    throw error;
  }
});

export const putProfile = createAsyncThunk('auth/putProfile', async (profileData, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(profileData);

  try {
    const response = await axios.put('/api/Auth/Profile', profileData, config);
    // const response = await axios.get('/api/Auth/Profile', config);

    return response.data;
  } catch (error) {
    // Xử lý lỗi nếu cần thiết
    throw error;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.account = action.payload.data;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.register = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload.data;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(putProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(putProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(putProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
