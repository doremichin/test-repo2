import { configureStore } from '@reduxjs/toolkit'
import photoReducer from "./photo/slice";
import commonReducer from "./common/slice";

export const store = configureStore({
    reducer: {
        common : commonReducer,
        photo : photoReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
