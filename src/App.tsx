import React, { createContext, useReducer, useState } from 'react';
import { Action, State, ContextState } from './types/stateType';
import todoReducer from './reducers/todoReducer';
import TaskForm from './components/forms/TaskForm';
import TasksList from './components/tasks/TasksList';
import './App.css';

const initialState: State = {
  tasks: [],
};

export const ContextApp = createContext<ContextState>({
  dispatch: () => null,
});

function App() {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    todoReducer,
    initialState
  );

  const ContextState: ContextState = {
    dispatch,
  };

  const [editing, setEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(state.tasks[0]);

  return (
    <ContextApp.Provider value={ContextState}>
      <TaskForm editing={editing} task={currentTask} setEditing={setEditing} />
      <TasksList
        state={state}
        setEditing={setEditing}
        setCurrentTask={setCurrentTask}
      />
    </ContextApp.Provider>
  );
}

export default App;
