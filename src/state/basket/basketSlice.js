import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    itemCount: 0
}

export const basketSlice = createSlice({
    name: 'basket', 
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products = [...state.products, action.payload];
            state.itemCount += action.payload.count;
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(item => item.product.id !== action.payload.item.product.id);
            state.itemCount -= action.payload.item.count;
        }, 
        incrementCount: (state, action) => {
            const item = state.products.find(item => item.product.id === action.payload.product.id);
            item.count += action.payload.count;
            state.itemCount += action.payload.count;
        },
        decrementCount: (state, action) => {
        }
    }
})

export const {addProduct, removeProduct, incrementCount, decrementCount} = basketSlice.actions;
export default basketSlice.reducer;

