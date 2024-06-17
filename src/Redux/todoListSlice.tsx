import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ListType } from "../CommonComponents/types"
import { ReducerType } from "./store"
import axios from "axios"

const intialState:ListType={
list :[],
status:'',
error:null,
todoStatus:' '
}
export const postList=createAsyncThunk('list/todoList',async(data:object)=>{
    console.log("hey");
    const postTodoList= await axios.post('http://localhost:8010/list/todoList',data)
    return postTodoList?.data

})
const ListSlice=createSlice({
    name:'listSlice',
    initialState:intialState,
    reducers:{
        getAllList(state,action){
            state.list.push(action?.payload)
        }
    },
    extraReducers(builder) {
        builder
        .addCase(postList.pending,(state,action)=>{
            state.status="loading"
        })
        .addCase(postList.fulfilled,(state,action)=>{
            state.status="success"
            
        })
        .addCase(postList.rejected,(state,action)=>{
            state.status="rejected"
        })
    },
})
export const selectorList=(state:ReducerType)=>state.listSlice.list
export const getPostListStatus=(state:ReducerType)=>state.listSlice.status
export const {getAllList}= ListSlice.actions
export default ListSlice.reducer;