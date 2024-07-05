import { useTodoListContext } from '../Context/todoListContext';
import { TaskList } from '../CommonComponents/listDisplay';
import { useEffect, useState } from 'react';
import { Response } from '../CommonComponents/types';

export const TodoList = () => {
    const [response,setResponse]= useState<Response[]>([])
    const { state } = useTodoListContext()
    const status=["ToDo","WIP","Done"]
  useEffect(()=>{
    setResponse(state?.list)
  },[state])
    return (
        <div className="grid grid-cols-3 gap-4 m-6">

            {status.map((data) => {
                return (
                    <div>
                        <label className='text-sm font-bold ml-6'>{data}</label>
                        <TaskList getAllToDo={response} status={data}/>
                    </div>
                )
            })}
        </div>
    )
}