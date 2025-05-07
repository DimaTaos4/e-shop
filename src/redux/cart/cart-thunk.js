import { createAsyncThunk } from "@reduxjs/toolkit";
import { createCartApi, getCartApi } from "../../shared/api/cart-api";


export const createCart = createAsyncThunk(
    'cart/create',
    async (_, { rejectWithValue }) => {
        const { data, error } = createCartApi()
        if (data) { return data._id };
        return rejectWithValue(error?.response?.data?.massege);
    }

)
export const fetchCart = createAsyncThunk(
    'cart/create',
    async (_, { rejectWithValue, getState }) => {
        const { cart } = getState();
        const { data, error } = await getCartApi(cart.cartId)
        console.log(data);
        if (data) return data.items;
        return rejectWithValue(error?.response?.data?.massege)
    }
)