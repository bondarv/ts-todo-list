import React from 'react';
import { ActionType, DispatchAction } from '../../types/stateType';
import { Task } from '../../types/taskType';

interface TaskComponentProps {
  task: Task;
  dispatch: DispatchAction;
}

const TaskComponent: React.FC<TaskComponentProps> = ({ task, dispatch }) => (
  <li className={task.isDone ? 'ready' : undefined}>
    <label>
      <input
        type="checkbox"
        onChange={() => dispatch({ type: ActionType.TOGGLE, payload: task })}
        checked={task.isDone}
      />
    </label>
    <div>{task.name}</div>
    <button
      className="remove-button"
      onClick={() =>
        dispatch({
          type: ActionType.REMOVE,
          payload: task,
        })
      }
    >
      X
    </button>
  </li>
);

export default React.memo(TaskComponent);
