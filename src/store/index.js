import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import forumReducer from './forumReducer';

const rootReducer = combineReducers({
    main: mainReducer,
    forum: forumReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store;