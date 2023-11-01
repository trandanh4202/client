import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    account: localStorage.getItem('account') ? JSON.parse(localStorage.getItem('account')) : {},
    register: false,
    loading: false,
    error: null,
};
// Thực hiện API login
export const login = createAsyncThunk('auth/login', async (loginData) => {
    const response = await axios.post('api/Auth/Login', loginData);
    // Extract the token and expiration time from the response data
    const { token, expire, role } = response.data.data;
    console.log(loginData)
    // Create an object to hold both token and expiration
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
    console.log('hello')
    return response.data;
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
            });
    },
});

export default authSlice.reducer;
