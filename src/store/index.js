import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import mainReducer from './mainReducer';

const rootReducer = combineReducers({
    main: mainReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store;