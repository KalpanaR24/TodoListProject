import { useTodoListContext } from '../Context/todoListContext';
import { TaskList } from '../CommonComponents/listDisplay';
import { useEffect, useState } from 'react';
import { Response } from '../CommonComponents/types';

export const TodoList = () => {
    const [response,setResponse]= useState<Response[]>([])
    const { state } = useTodoListContext()
  useEffect(()=>{
    setResponse(state?.list)
  },[state])
    return (
        <div className="grid grid-cols-3 gap-4 m-6">
           <div>
                <label className='text-sm font-bold'>TODO List</label>
                <TaskList getAllToDo={response}/>
           </div>
            <div>
                <label className='text-sm font-bold'>WIP</label>
            </div>
            <div>
                <label className='text-sm font-bold'>Done</label>
            </div>
        </div>
    )
}