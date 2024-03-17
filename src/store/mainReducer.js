import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuth: true,
    isAdmin: true,
}

const slice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setIsAuth: (state, action) => {
            state.isAuth = action.payload
        },
    }
})

export const {
    setIsAuth,
} = slice.actions;
  
export default slice.reducer;
  