import { configureStore } from '@reduxjs/toolkit'
import sessionSlice from './slices/auth-slice';
export const store = configureStore({
    reducer: {
        session: sessionSlice
    },
})

