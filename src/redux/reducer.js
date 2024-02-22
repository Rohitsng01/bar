import { createReducer } from "@reduxjs/toolkit";


// export const cartReducer = createReducer({
//     cartIems:[],
//     subtotal:0,
//     shipping:0,
//     tax:0,
//     total:0
// },{
//     addToCart:(state,action)=>{
//         const item = action.payload;
//         const IsItemExist = state.cartIems.find(i => i.id === item.id)
//     }
// })