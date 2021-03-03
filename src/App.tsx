import React, { createContext, useReducer } from 'react';
import { ActionType, Action, State, ContextState } from './types/stateType';
import NewTask from './NewTask';
import TasksList from './TasksList';

// Начальные значения стейта
export const initialState: State = {
  tasks: [],
};

export const ContextApp = createContext<ContextState>({
  state: initialState,
  dispatch: () => null,
});

// Создаём редьюсер, принимающий на вход текущий стейт и объект Action с полями type и payload, тип возвращаемого редьюсером значения - State
export function todoReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.ADD: {
      return {
        tasks: [...state.tasks, action.payload],
      };
    }
    case ActionType.REMOVE: {
      return {
        tasks: state.tasks.filter((task) => task !== action.payload),
      };
    }
    case ActionType.TOGGLE: {
      return {
        tasks: state.tasks.map((task) =>
          task !== action.payload ? task : { ...task, isDone: !task.isDone }
        ),
      };
    }
    default:
      throw new Error('Unexpected action');
  }
}

function App() {
  // Используем созданный todoReducer, передав его аргументом в useReduser. Изначально в стейт попадёт initialState, и далее при диспатче будет обновляться.
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    todoReducer,
    initialState
  );

  const ContextState: ContextState = {
    state,
    dispatch,
  };

  // Передаём в контекст результаты работы useReducer - стейт и метод его изменения
  return (
    <>
      <ContextApp.Provider value={ContextState}>
        <NewTask />
        <TasksList />
      </ContextApp.Provider>
    </>
  );
}

export default App;
