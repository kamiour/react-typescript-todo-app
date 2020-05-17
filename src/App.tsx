import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo'
import { Todo } from './Todo.model';

const App: React.FC = () => {
  const [todos, setState] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setState(prevTodos => [...prevTodos, {id: Math.random().toString(), text: text}])
  }

  const todoDeleteHandler = (id: string) => {
    setState(prevTodos => {
      return prevTodos.filter((item: Todo) => item.id !== id)
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
