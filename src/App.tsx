import React, { createContext, useReducer } from 'react';
import { Action, State, ContextState } from './types/stateType';
import todoReducer from './reducers/todoReducer';
import NewTask from './components/NewTask';
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

  return (
    <ContextApp.Provider value={ContextState}>
      <NewTask />
      <TasksList />
    </ContextApp.Provider>
  );
}

export default App;
