import { configureStore } from "@reduxjs/toolkit";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import cartReducer from './cart/cart-slice'
import storage from 'redux-persist/lib/storage'
const cartPersistConfig = {
    key: 'cart',
    storage: storage,
    whitelist: ['cardId'],
}

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
    reducer: {
        cart: persistedCartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store)