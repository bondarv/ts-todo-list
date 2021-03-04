import { ActionType, Action, State } from '../types/stateType';

function todoReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.ADD: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    }
    case ActionType.REMOVE: {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    }
    case ActionType.TOGGLE: {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id !== action.payload.id
            ? task
            : { ...task, isDone: !task.isDone }
        ),
      };
    }
    case ActionType.UPDATE: {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id !== action.payload.id ? task : action.payload
        ),
      };
    }
    default:
      throw new Error('Unexpected action');
  }
}

export default todoReducer;
