import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { todoAdded } from './todosSlice';

function CreateTodo() {

  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const state = useSelector((state) => state.todos.entities);
  console.log(state)

  function handleChange(e){
    setText(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch(todoAdded(text));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <p>
          <label>add todo </label>
          <input type="text" onChange={handleChange} value={text} />
           Form Text: {text} {state}
        </p>
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateTodo;
