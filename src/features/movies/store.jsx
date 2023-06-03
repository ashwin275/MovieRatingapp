import {configureStore} from '@reduxjs/toolkit'
import moviesReducer from "./Slice"


export const store = configureStore({
    reducer:{
        movies:moviesReducer,
    },
});

