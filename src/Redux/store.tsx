import { configureStore } from "@reduxjs/toolkit";
import ListSliceReducer from './todoListSlice'
export const Store= configureStore({
    reducer:{
        listSlice:ListSliceReducer
    }
})
export type ReducerType= ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch;