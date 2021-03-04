import { useContext } from 'react';
import { ContextApp } from '../../App';
import TaskComponent from './TaskComponent';
import {
  useRemoveTaskAction,
  useToggleTaskAction,
} from '../../actions/taskActions';

function TasksList() {
  const { state } = useContext(ContextApp);
  const toggleTaskAction = useToggleTaskAction();
  const removeTaskAction = useRemoveTaskAction();

  return (
    <ul>
      {state.tasks.map((task, i) => (
        <TaskComponent
          task={task}
          toggleTask={toggleTaskAction}
          removeTask={removeTaskAction}
          key={i}
        />
      ))}
    </ul>
  );
}

export default TasksList;
