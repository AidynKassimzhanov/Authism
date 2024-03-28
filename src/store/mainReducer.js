import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuth: false,
    isAdmin: false,
}

const slice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setIsAuth: (state, action) => {
            state.isAuth = action.payload
        },
        setIsAdmin: (state, action) => {
            state.isAdmin = action.payload
        },
    }
})

export const {
    setIsAuth,
    setIsAdmin
} = slice.actions;
  
export default slice.reducer;
  