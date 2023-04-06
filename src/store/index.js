import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import site from "./site"
const store = configureStore({
    reducer: {
        auth,
        site
    }
})

export default store