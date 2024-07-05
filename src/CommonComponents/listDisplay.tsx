import { FilterEmptyValue } from "./commonFunctions/FileteredArray";
import { Card } from "./Card";
import { useDispatch } from "react-redux";
import { updateListSlice } from "../Redux/updateTodoListSlice";
import { AppDispatch } from "../Redux/store";
import { UpdateTodo } from "./types";
import { Arrow, Delete } from "./Arrow";
import { useState } from "react";

export const TaskList = (props: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const MoveToNextFlow = (data: UpdateTodo) => {
    dispatch(
      updateListSlice({
        id: data?.id,
        status: data?.status==="ToDo"?"WIP":"Done",
        task: data?.task,
      })
    );
    //setStatus(true)
    setTimeout(()=>{
        window.location.reload();
    },2000)
  };
  return (
    <div>
       
      {FilterEmptyValue(props?.getAllToDo)?.map((data) => {
        return (
          <>
            {data?.status === props?.status && (
              <section className="m-2 p-4">
                <div className="flex">
                  <input type="checkbox" className="m-4" />
                  <Card text={data?.task} />
                </div>

                <button
                  type="button"
                  onClick={() => MoveToNextFlow(data)}
                  className="ml-12 text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-8 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  {props?.status === "WIP" || props?.status === "ToDo" ? (
                    <Arrow />
                  ) : (
                    <Delete />
                  )}
                </button>
              </section>
            )}
          </>
        );
      })}
    </div>
  );
};
