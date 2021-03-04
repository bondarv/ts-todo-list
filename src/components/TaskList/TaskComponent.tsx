import React from 'react';
import { Task } from '../../types/taskType';

interface TaskComponentProps {
  task: Task;
  removeTask: (task: Task) => void;
  toggleTask: (task: Task) => void;
}

const TaskComponent: React.FC<TaskComponentProps> = ({
  task,
  toggleTask,
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
    <button className="remove-button" onClick={() => removeTask(task)}>
      X
    </button>
  </li>
);

export default React.memo(TaskComponent);
