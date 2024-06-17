import { FilterEmptyValue } from "./FileteredArray"
//compose function takes from right to left 
export const compose = <T,>(...fns:T[])=>(val:T)=>fns.reduceRight((prev:T,fn:any)=>fn(prev),val)
//intial data
//updated data
//getAllTodo
//FilterEmptyValue()
export const displayData=<T extends string,>(todoList:T[],filteredTodo:T[]):string[]=>{
    return filteredTodo?.length?filteredTodo:todoList
}
//compose(FilterEmptyValue,displayData)