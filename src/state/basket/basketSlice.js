import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: []
}

export const basketSlice = createSlice({
    name: 'basket', 
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products = [...state.products, action.payload]
        },
        removeProduct: (state, action) => {
        }, 
        incrementCount: (state, action) => {
            const item = state.products.find(item => item.product.id === action.payload.product.id);
            item.count += action.payload.count;
        },
        decrementCount: (state, action) => {
        }
    }
})

export const {addProduct, removeProduct, incrementCount, decrementCount} = basketSlice.actions;
export default basketSlice.reducer;

