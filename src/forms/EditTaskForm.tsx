import React, { useState, useEffect } from 'react';
import { useUpdateTaskAction } from '../actions/taskActions';
import { Task } from '../types/taskType';

interface EditTaskFormProps {
  task: Task;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

function EditTaskForm({ task, setEditing }: EditTaskFormProps) {
  const [taskName, changeTaskName] = useState(task.name);

  useEffect(() => {
    changeTaskName(task.name);
  }, [task]);

  const updateTaskAction = useUpdateTaskAction();

  function editTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEditing(false);

    if (taskName && taskName !== task.name) {
      updateTaskAction({
        ...task,
        name: taskName,
      });
    }
  }

  function handleCancel(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setEditing(false);
  }

  return (
    <form onSubmit={editTask}>
      <input
        type="text"
        onChange={(event) => changeTaskName(event.target.value)}
        value={taskName}
      />
      <button>Edit a task</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  );
}

export default EditTaskForm;
