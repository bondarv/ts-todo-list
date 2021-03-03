import React, { useContext, useState } from 'react';
import { ContextApp } from '../App';
import { ActionType } from '../types/stateType';

function NewTask() {
  const { dispatch } = useContext(ContextApp);
  const [taskName, changeTaskName] = useState('');

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskName) {
      dispatch({
        type: ActionType.ADD,
        payload: {
          name: taskName,
          isDone: false,
        },
      });
      changeTaskName('');
    }
  }

  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        onChange={(event) => changeTaskName(event.target.value)}
        value={taskName}
      />
      <button type="submit">Add a task</button>
    </form>
  );
}

export default NewTask;
