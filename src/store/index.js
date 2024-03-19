import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import forumReducer from './forumReducer';
import { postsApi } from './apiSlice';

const rootReducer = combineReducers({
    main: mainReducer,
    forum: forumReducer,
    [postsApi.reducerPath]: postsApi.reducer
})

const store = configureStore({
    // reducer: rootReducer
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApi.middleware),
})

export default store;