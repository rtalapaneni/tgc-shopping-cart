import { createSlice } from "@reduxjs/toolkit";

const countState = {
    value: 0
}

const couunterSlice = createSlice({
    name: 'counter',
    initialState: countState,
    reducers: {
        increment:(state)=>{
            state.value++
        },
        decrement: (state)=>{
            state.value--
        },
        reset: (state)=>{
            state.value = 0
        }
    }
})

export const {increment, decrement, reset} = couunterSlice.actions;
export default couunterSlice.reducer;