import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        grouped:[],

    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items=state.items.filter((item)=>item.id!==action.payload.id)
        },
        clearCart:(state)=>{
            state.items.length=0
            state.grouped.length=0
        },
        groupedCart:(state)=>{
            let grouped={}
            state.items.forEach((i)=>{
                const{name,item}=i;
                if(!grouped[name]){
                    grouped[name]=[item]
                }else{
                    grouped[name].push(item)
                }
            })
            state.grouped=Object.entries(grouped);

        }
    }
})

export const {addItem,removeItem,clearCart,groupedCart}=cartSlice.actions;
export default cartSlice.reducer;
