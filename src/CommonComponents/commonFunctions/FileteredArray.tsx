import { Response } from "../types"

//composition Function
export const FilterEmptyValue=(data:Response[])=>{
    return data.filter((str)=>str?.task!='')
}
export const FilteredList=(array:string[],data:string):string[]=>{
    return array.filter((str:string)=>str!==data)
}