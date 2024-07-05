import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { UpdateTodo } from "../CommonComponents/types"

export const updateListState={
    status:""
}
//api integration using createAsync thunk
export const updateListSlice= createAsyncThunk("list/id", async(response:UpdateTodo)=>{
    const updateTodo= await axios.put(`http://localhost:8010/list/${response?.id}`,response)
    return updateTodo?.data
})

//actions and reducers
const updateList= createSlice({
    name:'updateList',
    initialState:updateListState,
    reducers:{

    },
    extraReducers(builder) {
        builder
        .addCase(updateListSlice.pending,(state,action)=>{
            state.status="pending"
        })
        .addCase(updateListSlice.fulfilled,(state,action)=>{
            state.status="success"
        })
        .addCase(updateListSlice.rejected,(state,action)=>{
            state.status="Rejected"
        })
    },
})

//reducer

export default updateList.reducer;