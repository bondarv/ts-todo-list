import { ActionType, Action, State } from '../types/stateType';

function todoReducer(state: State, action: Action): State {
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

export default todoReducer;
