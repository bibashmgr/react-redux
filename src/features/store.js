import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter/counterSlice";

export default configureStore({
    reducer:{
        // includes all the reducer functions
        counter: counterReducer
    },
})