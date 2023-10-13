import { configureStore,} from "@reduxjs/toolkit";
import userReducer from './userSlice'
import {articleApi} from './article' 

export default configureStore({
    reducer:{
        user: userReducer,
        [articleApi.reducerPath]: articleApi.reducer 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware) 
})

