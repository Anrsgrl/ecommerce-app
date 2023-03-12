import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import BASE_URL from "../../api/productsUrl";

const initialState = {
    loading: false,
    products: [],
    error: '',
}

export const fetchProducts = createAsyncThunk('product/fetchProducts', () => {
    return axios.get(BASE_URL).then((res) => res.data)
})

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
            state.error = ''
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.products = []
            state.error = action.error.message
        })
    }
})

export const productReducer = productSlice.reducer;