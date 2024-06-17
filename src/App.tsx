import './App.css';
import List from '../src/BasicComponents/List'
import {TodoList} from '../src/BasicComponents/todoList'
import { ProviderForTodoList, TodoListState } from './Context/todoListContext';

function App() {
return (
    <div>
      <header className="App-header">
        <ProviderForTodoList list={TodoListState?.list} >
          <>
          <List />
          <TodoList />
          </>
        </ProviderForTodoList>
      </header>
    </div>
  );
}

export default App;
