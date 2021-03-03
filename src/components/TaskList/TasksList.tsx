import { useContext } from 'react';
import { ContextApp } from '../../App';
import TaskComponent from './TaskComponent';

function TasksList() {
  const { state, dispatch } = useContext(ContextApp);

  return (
    <ul>
      {state.tasks.map((task, i) => (
        <TaskComponent task={task} dispatch={dispatch} key={i} />
      ))}
    </ul>
  );
}

export default TasksList;
