import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetSingleTodoQuery, usePutTodoMutation } from '../redux/todoSlice';

const EditTodo = () => {
  const { id } = useParams();
  const { data } = useGetSingleTodoQuery(id);
  const [task, setTask] = useState('');
  const [editTodo] = usePutTodoMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setTask(data.task);
    }
  }, [data]);

  const handleSubmit = e => {
    e.preventDefault();
    editTodo({ task: e.currentTarget.task.value, id});

    navigate('/');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Todo: 
        {data && <input type='text' name='task' value={task} onChange={(e) => setTask(e.target.value)} />}
      </label>
      <button type='submit'>Confirm</button>
    </form>
  )
}

export default EditTodo
