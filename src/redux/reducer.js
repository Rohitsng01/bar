import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    CartItems: [],
    subtotal: 0,
    shipping: Math.floor(Math.random() * (20 - 10 + 1)) + 10, 
    tax: Math.floor(Math.random() * (20 - 1 + 1)) + 1,
    total: 0
};

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.CartItems.find(i => i.id === item.id);
            
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                state.CartItems.push({ ...item, qty: 1 });
            }
            
            // Recalculate totals
            state.subtotal = state.CartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
            state.total = state.subtotal + state.shipping + state.tax;
        },
        
        increment: (state, action) => {
            const item = state.CartItems.find(i => i.id === action.payload);
            if (item) {
                item.qty += 1;
                state.subtotal = state.CartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
                state.total = state.subtotal + state.shipping + state.tax;
            }
        },
        
        decrement: (state, action) => {
            const item = state.CartItems.find(i => i.id === action.payload);
            if (item && item.qty > 1) {
                item.qty -= 1;
                state.subtotal = state.CartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
                state.total = state.subtotal + state.shipping + state.tax;
            }
        },
        
        deleteItem: (state, action) => {
            state.CartItems = state.CartItems.filter(i => i.id !== action.payload);
            state.subtotal = state.CartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
            state.total = state.subtotal + state.shipping + state.tax;
        },
        
        clearCart: (state) => {
            state.CartItems = [];
            state.subtotal = 0;
            state.total = 0;
        },
        updateShippingTax: (state, action) => {
            state.shipping = action.payload.shipping;
            state.tax = action.payload.tax;
            state.total = state.subtotal + state.shipping + state.tax;
        }
    }
});

export const { addToCart, increment, decrement, deleteItem, clearCart, updateShippingTax } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;