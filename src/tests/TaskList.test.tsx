import { fireEvent, screen, waitFor, within } from "@testing-library/dom";
import { act, render } from "@testing-library/react";
import { TaskList } from "../CommonComponents/listDisplay";
import { Store } from "../Redux/store";
import { Provider } from "react-redux";
import { updateListSlice } from "../Redux/updateTodoListSlice";

const mockResponse=[
    
    { id: 1, task: 'Task 1', status: 'ToDo' },
    { id: 2, task: 'Task 2', status: 'WIP' },
    { id: 3, task: 'Task 3', status: 'Done' }
]
describe('render ListDisplay Component',()=>{
test('check if Todo response is mapped correctly',async()=>{
    render(<Provider store={Store}><TaskList getAllToDo={mockResponse} status={'ToDo'}/></Provider>)
    const childresponse = await waitFor(()=>screen.getByText('Task 1'))
    const button=screen.getByRole('button')
    expect(childresponse).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(screen.getByTestId('arrow')).toBeInTheDocument();
    fireEvent.click(button);
})
test('check if WIP response is mapped correctly',async()=>{
    render(<Provider store={Store}><TaskList getAllToDo={mockResponse} status={'WIP'}/></Provider>)
   const childresponse = await waitFor(()=>screen.getByText('Task 2'))
    expect(childresponse).toBeInTheDocument();
})
test('check if Done response is mapped correctly',async()=>{
    render(<Provider store={Store}><TaskList getAllToDo={mockResponse} status={'Done'}/></Provider>)
   const childresponse = await waitFor(()=>screen.getByText('Task 3'))
    expect(childresponse).toBeInTheDocument();
})
})