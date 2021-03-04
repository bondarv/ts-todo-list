import React, { createContext, useReducer, useState } from 'react';
import { Action, State, ContextState } from './types/stateType';
import todoReducer from './reducers/todoReducer';
import NewTaskForm from './forms/NewTaskForm';
import EditTaskForm from './forms/EditTaskForm';
import TasksList from './components/TaskList/TasksList';
import './App.css';

const initialState: State = {
  tasks: [],
};

export const ContextApp = createContext<ContextState>({
  state: initialState,
  dispatch: () => null,
});

function App() {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    todoReducer,
    initialState
  );

  const ContextState: ContextState = {
    state,
    dispatch,
  };

  const [editing, setEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(state.tasks[0]);

  return (
    <ContextApp.Provider value={ContextState}>
      {editing ? (
        <EditTaskForm task={currentTask} setEditing={setEditing} />
      ) : (
        <NewTaskForm />
      )}
      <TasksList setEditing={setEditing} setCurrentTask={setCurrentTask} />
    </ContextApp.Provider>
  );
}

export default App;
