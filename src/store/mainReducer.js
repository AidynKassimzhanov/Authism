import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuth: false,
    isAdmin: false,
    user: {},
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
        setUser: (state, action) => {
            state.user = action.payload
            state.isAuth = true
            state.user.Role.name === 'admin' ? state.isAdmin = true : state.isAdmin = false
        },
        clearUser: (state) => {
            state.user = null;
            state.isAuth = false;
            state.isAdmin = false
          },
    }
})

export const {
    setIsAuth,
    setIsAdmin,
    setUser,
    clearUser
} = slice.actions;
  
export default slice.reducer;
  