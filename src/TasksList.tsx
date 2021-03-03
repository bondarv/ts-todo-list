import { useContext } from 'react';
import { ActionType } from './types/stateType';
import { ContextApp } from './App';

function TasksList() {
  // Получаем состояние и диспатч
  const { state, dispatch } = useContext(ContextApp);

  return (
    <ul>
      {state.tasks.map((task, i) => (
        <li key={i} className={task.isDone ? 'ready' : undefined}>
          <label>
            <input
              type="checkbox"
              onChange={() =>
                dispatch({ type: ActionType.TOGGLE, payload: task })
              }
              checked={task.isDone}
            />
          </label>
          <div className="task-name">{task.name}</div>
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
      ))}
    </ul>
  );
}

export default TasksList;
