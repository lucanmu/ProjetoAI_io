import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../component/Pages/SignUp/authSlice.js"


export const store = configureStore({
    reducer: {
        auth: authReducer
    },
})