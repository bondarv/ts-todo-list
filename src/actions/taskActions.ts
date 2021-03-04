import { useContext, useCallback } from 'react';
import { ContextApp } from '../App';
import { ActionType } from '../types/stateType';
import { Task } from '../types/taskType';

export function useAddTaskAction() {
  const { dispatch } = useContext(ContextApp);

  return useCallback(
    (task) => {
      const addTaskAction = (payload: Task) =>
        dispatch({ type: ActionType.ADD, payload });

      addTaskAction(task);
    },
    [dispatch]
  );
}

export function useRemoveTaskAction() {
  const { dispatch } = useContext(ContextApp);

  return useCallback(
    (task) => {
      const removeTaskAction = (payload: Task) =>
        dispatch({ type: ActionType.REMOVE, payload });

      removeTaskAction(task);
    },
    [dispatch]
  );
}

export function useToggleTaskAction() {
  const { dispatch } = useContext(ContextApp);

  return useCallback(
    (task) => {
      const toggleTaskAction = (payload: Task) =>
        dispatch({ type: ActionType.TOGGLE, payload });

      toggleTaskAction(task);
    },
    [dispatch]
  );
}

export function useUpdateTaskAction() {
  const { dispatch } = useContext(ContextApp);

  return useCallback(
    (task) => {
      const updateTaskAction = (payload: Task) =>
        dispatch({ type: ActionType.UPDATE, payload });

      updateTaskAction(task);
    },
    [dispatch]
  );
}
