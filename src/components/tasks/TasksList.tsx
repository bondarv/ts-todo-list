import React, { useCallback } from 'react';
import TaskComponent from './TaskComponent';
import { State } from '../../types/stateType';
import { Task } from '../../types/taskType';
import {
  useRemoveTaskAction,
  useToggleTaskAction,
} from '../../actions/taskActions';

interface TasksListProps {
  state: State;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentTask: React.Dispatch<React.SetStateAction<Task>>;
}

function TasksList({ state, setEditing, setCurrentTask }: TasksListProps) {
  const toggleTaskAction = useToggleTaskAction();
  const removeTaskAction = useRemoveTaskAction();

  const toggleTask = useCallback(
    (task) => {
      toggleTaskAction(task);
      setEditing(false);
    },
    [toggleTaskAction, setEditing]
  );

  const removeTask = useCallback(
    (task) => {
      removeTaskAction(task);
      setEditing(false);
    },
    [removeTaskAction, setEditing]
  );

  const editTask = useCallback(
    (task) => {
      setCurrentTask(task);
      setEditing(true);
    },
    [setCurrentTask, setEditing]
  );

  return (
    <ul>
      {state.tasks.map((task) => (
        <TaskComponent
          task={task}
          editTask={editTask}
          toggleTask={toggleTask}
          removeTask={removeTask}
          key={task.id}
        />
      ))}
    </ul>
  );
}

export default TasksList;
