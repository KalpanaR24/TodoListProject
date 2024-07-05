import { createContext, useContext, useReducer } from "react";
import { TodoListType, TodoListActionType, ResponseType, todoListContextType, ChildrenType, Response} from "../CommonComponents/types"
import axios from "axios";

export const TodoListState: TodoListType = {
    list:[{
        id:0,
        task:'',
        status:''
    }]
}
export const getTodoListReducer = (state: TodoListType, action: TodoListActionType) => {
    switch (action.type) {
        case ResponseType.TODOLIST:
            return {...state,list:action?.payload ?? state.list}
    }
}
//function to dispatch
export const TodoListResponse = (State: TodoListType) => {
    const [state, dispatch] = useReducer(getTodoListReducer, State)
const getTodoListData = async() => {
        const data = await axios.get("http://localhost:8010/list/getTodoList")
        const response:Response[]= data?.data
        dispatch({ type: ResponseType.TODOLIST, payload: response})
    }
    return { state, getTodoListData }
}
// to provide intial value for create context 
const GetTodoListResponse: todoListContextType = {
    state: TodoListState,
    getTodoListData: async() => { }
}
//create Context here
export const CreateTodoListContext = createContext<todoListContextType>(GetTodoListResponse);
export const ProviderForTodoList = (
    { children, ...state }: ChildrenType & TodoListType) => {
    return (<CreateTodoListContext.Provider value={TodoListResponse(state)}>
        {children}
    </CreateTodoListContext.Provider>
    )
}
//using created context
export const useTodoListContext = (): todoListContextType => {
    const { state, getTodoListData } = useContext(CreateTodoListContext)
    return { state, getTodoListData }
}