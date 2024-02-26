import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './basket/basketSlice';

export const store = configureStore({
    reducer: {
        basket: basketReducer,
    }
})