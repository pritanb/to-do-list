import React from 'react'
import TodoList from './TodoList';

export const Todo = () => {
  return (
  <>
    <div className='wrapper'>
      <h1 className='text-center'>What to-do today?</h1>
      <TodoList />
    </div>
  </>
  );
};

export default Todo;