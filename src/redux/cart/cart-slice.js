import { createSlice } from "@reduxjs/toolkit";
import { createCart, fetchCart } from "./cart-thunk";


const initialState = {
    cart: [],
    loading: false,
    error: null,
    cardId: null,
}

const pending = (store) => {
    store.loading = true
    store.error = null
}
const fulfilled = (store, { payload }) => {
    store.loading = false
    store.cartId = payload
}
const rejected = (store, { payload }) => {
    store.loading = false
    store.error = payload
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(createCart.pending, pending)
            .addCase(createCart.fulfilled, fulfilled)
            .addCase(createCart.rejected, rejected)
            // .addCase(fetchCart.pending, pending)
            // .addCase(fetchCart.fulfilled, fulfilled)
            // .addCase(fetchCart.rejected, rejected)
    }
})
export default cartSlice.reducer