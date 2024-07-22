import { render, screen, waitFor } from "@testing-library/react"
import { TodoList } from "../BasicComponents/todoList"
import { Provider } from "react-redux"
import { Store } from "../Redux/store"


const mockResponse=[
    
        { id: 1, task: 'Task 1', status: 'ToDo' },
        { id: 2, task: 'Task 2', status: 'WIP' },
        { id: 3, task: 'Task 3', status: 'Done' }
]
jest.mock('../Context/todoListContext',()=>({
    ...jest.requireActual('../Context/todoListContext'),
    useTodoListContext:jest.fn()
})
)

describe('render TodoList',()=>{
    beforeEach(() => {
        require('../Context/todoListContext').useTodoListContext.mockReturnValue({
            state:{
                list: mockResponse
            }
        })
      });
    test('render label in component',()=>{
        render(  <Provider store={Store}>
            <TodoList />
          </Provider>)
        expect(screen.getByText('ToDo')).toBeInTheDocument();
        expect(screen.getByText('WIP')).toBeInTheDocument();
        expect(screen.getByText('Done')).toBeInTheDocument();
    })
    test('render TaskList Component',async()=>{
        render(
          <Provider store={Store}>
            <TodoList />
          </Provider>
        );
     expect(screen.getByText('Task 1')).toBeInTheDocument();
     expect(screen.getByText('Task 2')).toBeInTheDocument();
     expect(screen.getByText('Task 3')).toBeInTheDocument();
    })
})