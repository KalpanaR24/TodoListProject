import { FilterEmptyValue,FilteredList } from "./commonFunctions/FileteredArray"
import { Card } from './Card';
import { useDispatch } from "react-redux";
import axios from "axios";
export const TaskList=(props:any)=>{
    const MoveToNextFlow=async()=>{
      
    }
    return(
        <div>
        {FilterEmptyValue(props?.getAllToDo)?.map((data) => {
            return (
                <section className='m-2 p-4'>
                <div className='flex'>
                    <input type="checkbox" className='m-4'/>
                     <Card text={data?.task} /> 
                </div>
                <button type="button" 
                onClick={()=>MoveToNextFlow()}
                className="ml-12 text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-8 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                 Move to next flow</button>
                </section>
            )
        })}
    </div>
    )
}