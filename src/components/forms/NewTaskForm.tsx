import React, { useState } from 'react';
import { useAddTaskAction } from '../../actions/taskActions';
import { v4 as uuidv4 } from 'uuid';

function NewTaskForm() {
  const [taskName, changeTaskName] = useState('');
  const addTaskAction = useAddTaskAction();

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskName) {
      addTaskAction({
        id: uuidv4(),
        name: taskName,
        isDone: false,
      });
      changeTaskName('');
    }
  }

  function handleCancel(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    changeTaskName('');
  }

  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        onChange={(event) => changeTaskName(event.target.value)}
        value={taskName}
      />
      <button type="submit">Add a task</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  );
}

export default NewTaskForm;
