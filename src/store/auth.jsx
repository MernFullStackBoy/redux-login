import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "Auth",
    initialState: {
        isLogin: false
    },
    reducers: {
        login(state) {
            state.isLogin = true
        },
        logout(state) {
            state.isLogin = false
        }
    }
})

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
})

export const authAction = authSlice.actions

export default store