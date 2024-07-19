import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


export const store = configureStore({
    // reducer is a predifined key which is an object that can hold more than one reducer as key value pairs
    reducer:{
        counter:counterSlice                   //countersice call cheythalum reducer ayirikkum bcs its exported in counterSlice
    } 
})