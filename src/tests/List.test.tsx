import { act, fireEvent, render,renderHook,screen } from "@testing-library/react"
import List from "../BasicComponents/List"
import React from 'react';
import userEvent from "@testing-library/user-event";
import { useTodoListContext } from "../Context/todoListContext";

beforeEach(() => {
    jest.useFakeTimers()
  })
  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers();
  });
test('render List Component',async()=>{
//Arrange
render(<List />)
//const fn=jest.fn();
const { result } = renderHook(() => useTodoListContext());
const { getTodoListData } = useTodoListContext()
//ACT
const inputElement= screen.getByTestId('inputTodo') as HTMLInputElement
await fireEvent.change(inputElement,{ target: { value: 'Hello, World!' }})
await userEvent.click(screen.getByRole('button'))
act(() => {
      jest.runAllTimers();
 });
//Assert
expect(screen.getByText("Please Add your daily Tasks/TODO List")).toBeInTheDocument();
expect(inputElement.value).toBe('Hello, World!');
expect(getTodoListData).toHaveBeenCalledTimes(1);
})