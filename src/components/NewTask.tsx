import React, { useState } from 'react';
import { useAddTaskAction } from '../actions/taskActions';

function NewTask() {
  const [taskName, changeTaskName] = useState('');
  const addTaskAction = useAddTaskAction();

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskName) {
      addTaskAction({
        name: taskName,
        isDone: false,
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
