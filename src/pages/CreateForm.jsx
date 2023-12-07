import React from 'react'
import { useCreateTodoMutation } from '../redux/todoSlice'
import { useNavigate } from 'react-router-dom';

const CreateForm = () => {
  const [createTask, { isLoading }] = useCreateTodoMutation();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    createTask(e.currentTarget.elements.task.value);
    navigate('/');
    e.currentTarget.reset();
  }

  return (
    <>
    {isLoading && <p>Loading ...</p>}
    {!isLoading && <form autoComplete='off' onSubmit={handleSubmit}>
      <label>
        Task: 
        <input type='text' name='task' />
      </label>
      <button type='sumbit'>Create</button>
    </form>}
    </>
  )
}

export default CreateForm
