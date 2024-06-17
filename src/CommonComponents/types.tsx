import { ReactElement } from "react";
import { TodoListResponse } from "../Context/todoListContext";
import { AxiosResponse } from "axios";


export interface ListState {
inputTodo: string;
}
export interface Response{
    id:number;
    task:string;
    status:string
}

export interface TodoListType{
list:Response[];
}
export enum ResponseType{
    TODOLIST
}

export type TodoListActionType={
    type:ResponseType,
    payload?:Response[]
}
export type todoListContextType = ReturnType<typeof TodoListResponse>
export type ChildrenType={
    children?:ReactElement|undefined
}
export interface ListType{
    list:string[],
    status:string
    error:string|null,
    todoStatus:string
}
