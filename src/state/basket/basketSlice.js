import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    itemCount: 0,
    totalCost: 0,
}

export const basketSlice = createSlice({
    name: 'basket', 
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products = [...state.products, action.payload];
            state.itemCount += action.payload.count;
            state.totalCost += (action.payload.product.price * action.payload.count);
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(item => item.product.id !== action.payload.item.product.id);
            state.itemCount -= action.payload.item.count;
            state.totalCost -= (action.payload.item.product.price * action.payload.item.count);
        }, 
        incrementCount: (state, action) => {
            const item = state.products.find(item => item.product.id === action.payload.product.id);
            item.count += action.payload.count;
            state.itemCount += action.payload.count;
            state.totalCost += (action.payload.product.price * action.payload.count);
        },
        updateCount : (state, action) => {
            const item = state.products.find(item => item.product.id === action.payload.item.product.id); // get matching item
            state.totalCost -= item.product.price * item.count; //Subtract previous cost contribution of item
            state.itemCount -= item.count;
            item.count = action.payload.newCount; //update item count
            state.itemCount += item.count;
            state.totalCost += item.product.price * item.count; //update cost contribution
        },
        clearBasket: (state) => {
            state.products = [];
            state.itemCount = 0;
            state.totalCost = 0;
        }
    }
})

export const {addProduct, removeProduct, incrementCount, updateCount, clearBasket} = basketSlice.actions;
export default basketSlice.reducer;

