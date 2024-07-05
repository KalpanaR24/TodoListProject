import { useEffect, useState } from 'react';
import { useTodoListContext } from '../Context/todoListContext';
import { useDispatch, useSelector } from "react-redux";
import { postList } from '../Redux/todoListSlice';
import { getPostListStatus } from '../Redux/todoListSlice';
import { AppDispatch } from '../Redux/store';
const List = () => {
    const [inputTodo, setInputTodo] = useState('')
    const status = useSelector(getPostListStatus)
    const dispatch= useDispatch<AppDispatch>();
    const { getTodoListData } = useTodoListContext()
    useEffect(()=>{
        getTodoListData()
      },[])
    const submitTodoList = () => {
        setInputTodo('')
        dispatch(postList({
        task:inputTodo,
        status:'ToDo'
        }))
        setTimeout(()=>{
            getTodoListData()
        },10)
       
    }
    return (
        <form>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div className="px-4 py-2 bg-gray-800 rounded-t-lg dark:bg-gray-800">
                    <label className="block mb-2 text-sm font-medium text-white dark:text-white">Please Add your daily Tasks/TODO List</label>
                    <textarea id="message" rows={4} value={inputTodo}
                        data-testid="inputTodo" 
                        onChange={(e) => setInputTodo(e.target.value)}
                        className="block p-2.5 w-full text-sm text-white bg-gray-700 rounded-lg border border-gray-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your thoughts here..."></textarea>
                    <button type="button"
                        onClick={submitTodoList}
                        className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Post your task</button>
                </div>
            </div>
        </form>

    )
}
export default List;