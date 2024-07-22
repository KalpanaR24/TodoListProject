import { act, fireEvent, render,renderHook,screen, waitFor } from "@testing-library/react"
import List from "../BasicComponents/List"
import React from 'react';
import userEvent from "@testing-library/user-event";
import { useTodoListContext,ProviderForTodoList,TodoListState } from "../Context/todoListContext";
import { Provider } from "react-redux";
import { Store } from "../Redux/store";
import { ResponseType } from "../CommonComponents/types";
import *  as todoListContext from '../Context/todoListContext'
beforeEach(() => {
    jest.useFakeTimers()
  })
  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers();
  });
  // jest.mock('../Context/todoListContext', () => ({
  //  ...jest.requireActual('../Context/todoListContext'),
  //   useTodoListContext: jest.fn(),
  // }));
  jest.spyOn(todoListContext,'useTodoListContext')
  describe('List Component', () => {
    const mockGetTodoListData = jest.fn();
  beforeEach(() => {
    require('../Context/todoListContext').useTodoListContext.mockReturnValue({
      state: TodoListState,
      getTodoListData: mockGetTodoListData,
    });
    render(
        <Provider store={Store}>
          <ProviderForTodoList list={TodoListState?.list}>
            <List />
          </ProviderForTodoList>
        </Provider>
      );
 });

  afterEach(() => {
    jest.clearAllMocks();
  });
test('render List Component',async()=>{

const inputElement= screen.getByTestId('inputTodo') as HTMLInputElement
expect(screen.getByText("Please Add your daily Tasks/TODO List")).toBeInTheDocument();
expect(inputElement.value).toBe("")
act(()=>{
    fireEvent.change(inputElement,{ target: { value: 'Hello, World!' }})
})
expect(inputElement.value).toBe('Hello, World!');
});


test('render List Component post your task button Event',async()=>{
 
    act(()=>{
        userEvent.click(screen.getByRole('button'));
    })
    await waitFor(() => {
        expect(mockGetTodoListData).toHaveBeenCalledTimes(2);
      });
    
    })
})