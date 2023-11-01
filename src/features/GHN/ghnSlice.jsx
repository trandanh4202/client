import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  province: [],
  district: [],
  ward: [],
  error: null,
  profile: null,
};

export const getProvince = createAsyncThunk('ghn/getProvince', async () => {
  const config = {
    headers: {
      token: `${process.env.REACT_APP_TOKEN_GHN}`,
    },
  };
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_GHN}/province`, config);
    return response.data;
  } catch (error) {
    // Xử lý lỗi nếu cần thiết
    throw error;
  }
});

export const getDistrict = createAsyncThunk('ghn/getDistrict', async ({ selectedProvinceID }) => {
  const config = {
    headers: {
      token: `${process.env.REACT_APP_TOKEN_GHN}`,
    },
  };
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_GHN}/district?province_id=${selectedProvinceID}`,
      config,
    );
    return response.data;
  } catch (error) {
    // Xử lý lỗi nếu cần thiết
    throw error;
  }
});

export const getWard = createAsyncThunk('ghn/getWard', async ({ selectedDistrictID }) => {
  const config = {
    headers: {
      token: `${process.env.REACT_APP_TOKEN_GHN}`,
    },
  };
  try {
    const response = await axios.get(
      `https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${selectedDistrictID}`,
      config,
    );
    return response.data;
  } catch (error) {
    // Xử lý lỗi nếu cần thiết
    throw error;
  }
});

const ghnSlice = createSlice({
  name: 'GHN',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProvince.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProvince.fulfilled, (state, action) => {
        state.loading = false;
        state.province = action.payload.data;
      })
      .addCase(getProvince.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getDistrict.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDistrict.fulfilled, (state, action) => {
        state.loading = false;
        state.district = action.payload.data;
      })
      .addCase(getDistrict.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getWard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWard.fulfilled, (state, action) => {
        state.loading = false;
        state.ward = action.payload.data;
      })
      .addCase(getWard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ghnSlice.reducer;
