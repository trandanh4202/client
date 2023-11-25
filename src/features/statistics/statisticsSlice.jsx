import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  statistics: {},
  listuser: [],
  loading: false,
  error: null,
};
// Thực hiện API login
export const getStatistics = createAsyncThunk('statistics/getStatistics', async (_, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get('/api/Auth/Admin/statistics?fromDate=2010-11-01&toDate=2023-11-30', config);

  return response.data;
});

export const getUser = createAsyncThunk('statistics/getUser', async (_, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get('/api/Auth/Admin/Users', config);
  return response.data;
});
export const putUserHide = createAsyncThunk('auth/putUserHide', async (userId, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const message = await axios.put(`/api/Auth/Admin/Disable/${userId}`, null, config);
  const response = await axios.get('/api/Auth/Admin/Users', config);

  return response.data;
});

export const putUserUnHide = createAsyncThunk('auth/putUserUnHide', async (userId, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const message = await axios.put(`/api/Auth/Admin/Enable/${userId}`, null, config);
  const response = await axios.get('/api/Auth/Admin/Users', config);

  return response.data;
});

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStatistics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.loading = false;
        state.statistics = action.payload.data;
      })
      .addCase(getStatistics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.listuser = action.payload.data;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(putUserHide.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(putUserHide.fulfilled, (state, action) => {
        state.loading = false;
        state.listuser = action.payload.data;
      })
      .addCase(putUserHide.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(putUserUnHide.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(putUserUnHide.fulfilled, (state, action) => {
        state.loading = false;
        state.listUser = action.payload.message;
      })
      .addCase(putUserUnHide.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default statisticsSlice.reducer;
