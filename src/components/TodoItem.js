import React, { useState } from 'react'
import { TiTick } from 'react-icons/ti'
import { AiFillEdit } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'

const TodoItem = ({ todo, onDelete, onComplete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleComplete = () => {
    onComplete(todo.id);
  };

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, editedTitle, editedDescription);
      setIsEditing(false);
    } else {
      setIsEditing(true);
      setEditedTitle(todo.title);
      setEditedDescription(todo.description);
    }
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    name === 'title' ? setEditedTitle(value) : setEditedDescription(value);
  };

  return (
    <div>
      <div>
        {isEditing ? (
          <div className='container'>
            <input 
              className='form-control'
              name='title'
              placeholder='Task' 
              value={editedTitle} 
              onChange={handleInputChange}>
            </input>
            <br></br>
            <textarea 
              className='form-control'
              name='description'
              placeholder='Description'
              value={editedDescription} 
              onChange={handleInputChange}>
            </textarea>
            <AiFillEdit className='btn-icon' size={28} onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</AiFillEdit>
          </div>
        ) : (
          <div className='card'>
            <div className='card-header' onClick={handleEdit}>
              {todo.title}
            </div>
            <p className='card-text' onClick={handleEdit}>
              {todo.description}
            </p>
            <div>
              <TiTick 
                className='btn-icon'
                size={28}
                onClick={handleComplete}>
                {todo.completed ? 'Undo' : 'Complete'}
              </TiTick>
              <AiFillEdit 
                className='btn-icon'
                size={28}
                onClick={handleEdit}>
                {isEditing ? 'Save' : 'Edit'}
              </AiFillEdit>
              <AiFillDelete
                className='btn-icon' 
                size={28}
                onClick={handleDelete}>
              </AiFillDelete>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
