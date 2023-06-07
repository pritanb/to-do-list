import React, {useState} from 'react'

export const TodoForm = ({ onAdd }) => {
  const [newTitle, setTitle] = useState('');
  const [newDescription, setDescription] = useState('');

  const handleTitleChange = e => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (newTitle.trim()) {
      onAdd(newTitle, newDescription);
      setTitle('');
      setDescription('');
    }
  }

  return (
    <div className='container'>
        <form className='todo-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label for='title'>Task</label>
          <input 
            name='title'
            id='title' 
            type='text' 
            className='form-control' 
            value={newTitle} 
            placeholder='Get it done!' 
            onChange={handleTitleChange}>
          </input>
        </div>
        <div className='form-group'>
          <label for='description'>Description</label>
          <textarea 
            name='description'
            id='description' 
            type='text' 
            className='form-control' 
            value={newDescription} 
            placeholder='Task Description' 
            onChange={handleDescriptionChange}>
          </textarea>
          <button type='submit' className='btn btn-dark'>Lets Go!</button>
        </div>
        
      </form>
    </div>
  );
}

export default TodoForm;
