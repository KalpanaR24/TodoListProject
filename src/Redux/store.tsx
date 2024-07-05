import { configureStore } from "@reduxjs/toolkit";
import ListSliceReducer from './todoListSlice'
import UpdateListSliceReducer from './updateTodoListSlice'
export const Store= configureStore({
    reducer:{
        listSlice:ListSliceReducer,
        updateList:UpdateListSliceReducer
    }
})
export type ReducerType= ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch;