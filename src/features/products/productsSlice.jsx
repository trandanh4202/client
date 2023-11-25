// productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  products: {},
  loading: false,
  error: null,
};
// Thực hiện API tạo sản phẩm
export const addProduct = createAsyncThunk('products/addProduct', async (productData, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const message = await axios.post('/api/products', productData, config);
  console.log(message);
  const response = await axios.post('/api/Products/search', {
    filter: {
      attributes: [],
    },
    pagination: {
      itemsPerPage: 50,
      pageNumber: 1,
    },
    query: '',
    sorting: {
      sort: 'SORT_BY_DISCOUNT_PERCENT',
      order: 'ORDER_BY_DESCENDING',
    },
    slug: '',
  });
  return response.data;
});
export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productData, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(productData);
  const message = await axios.delete(`/api/products/${productData}`, config);
  const response = await axios.post('/api/Products/search', {
    filter: {
      attributes: [],
    },
    pagination: {
      itemsPerPage: 50,
      pageNumber: 1,
    },
    query: '',
    sorting: {
      sort: 'SORT_BY_DISCOUNT_PERCENT',
      order: 'ORDER_BY_DESCENDING',
    },
    slug: '',
  });
  return response.data;
});

export const putProduct = createAsyncThunk('products/putProduct', async (productData, thunkAPI) => {
  const { getState } = thunkAPI;
  const token = getState().auth.account.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const message = await axios.put(`/api/products/${productData.id}`, productData, config);
  const response = await axios.post('/api/Products/search', {
    filter: {
      attributes: [],
    },
    pagination: {
      itemsPerPage: 50,
      pageNumber: 1,
    },
    query: '',
    sorting: {
      sort: 'SORT_BY_DISCOUNT_PERCENT',
      order: 'ORDER_BY_DESCENDING',
    },
    slug: '',
  });
  return response.data;
});
export const getProducts = createAsyncThunk(
  'products/getProducts',
  async ({ q = '', page = '1', pageSize = '20', selectedFilters = [], priceRange = [0, 1000000000] }) => {
    const response = await axios.post('/api/Products/search', {
      filter: {
        attributes: selectedFilters,
        priceGte: priceRange[0],
        priceLte: priceRange[1],
      },
      pagination: {
        itemsPerPage: pageSize,
        pageNumber: page,
      },
      query: q,
      sorting: {
        sort: 'SORT_BY_DISCOUNT_PERCENT',
        order: 'ORDER_BY_DESCENDING',
      },
      slug: '',
    });
    console.log(q, page, priceRange);
    return response.data;
  },
);

export const getProductsAdmin = createAsyncThunk('products/getProductsAdmin', async () => {
  const response = await axios.post('/api/Products/search', {
    filter: {
      attributes: [],
    },
    pagination: {
      itemsPerPage: 50,
      pageNumber: 1,
    },
    query: '',
    sorting: {
      sort: 'SORT_BY_DISCOUNT_PERCENT',
      order: 'ORDER_BY_DESCENDING',
    },
    slug: '',
  });
  return response.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getProductsAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductsAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data;
      })
      .addCase(getProductsAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(putProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(putProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data;
      })
      .addCase(putProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
