import { configureStore } from "@reduxjs/toolkit";  
import counterReducer from './counterSlice';

const tgcStore = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default tgcStore;