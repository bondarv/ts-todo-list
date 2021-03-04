import React from 'react';
import { Task } from '../../types/taskType';

interface TaskComponentProps {
  task: Task;
  toggleTask: (task: Task) => void;
  editTask: (task: Task) => void;
  removeTask: (task: Task) => void;
}

const TaskComponent: React.FC<TaskComponentProps> = ({
  task,
  toggleTask,
  editTask,
  removeTask,
}) => (
  <li className={task.isDone ? 'ready' : undefined}>
    <label>
      <input
        type="checkbox"
        onChange={() => toggleTask(task)}
        checked={task.isDone}
      />
    </label>
    <div>{task.name}</div>
    <button className="edit-button" onClick={() => editTask(task)}>
      Edit
    </button>
    <button className="remove-button" onClick={() => removeTask(task)}>
      Delete
    </button>
  </li>
);

export default React.memo(TaskComponent);
