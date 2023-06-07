import React, {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export const TodoList = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);

  useEffect(() => {
    let obj = localStorage.getItem('todos');
    if (obj) {
      setTodos(JSON.parse(obj));
    }
  }, [setTodos]);

  const addTodo = (title, description) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      description: description,
      completed: false
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
      return updatedTodos;
    });
  }

  const setComplete = id => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed: !todo.completed}
        }
        return todo;
      });
      return updatedTodos;
    });
  }

  const editTodo = (id, newTitle, newDescription) => {
    setTodos(prevTodos => {
      const updatedTodos = prevTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, title: newTitle, description: newDescription};
        }
        return todo;
      });
      return updatedTodos;
    });
  }

  const mainTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div>
      <div className='container'>
        <TodoForm onAdd={addTodo}/>
        {mainTodos.map(todo => (
          <TodoItem 
          className='card'
          key={todo.id} 
          todo={todo} 
          onDelete={deleteTodo} 
          onComplete={setComplete} 
          onEdit={editTodo}
        />))}
      </div>
      <div className='container'>
        {completedTodos.length > 0 ? <h2 style={{textAlign: 'center'}}>Completed</h2> : <></>}
        {completedTodos.map(todo => (
          <TodoItem 
          className='card'
          key={todo.id} 
          todo={todo} 
          onDelete={deleteTodo} 
          onComplete={setComplete} 
          onEdit={editTodo}
        />))}
      </div>
    </div>
  );
};

export default TodoList;