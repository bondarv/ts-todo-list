import todoReducer from './todoReducer';
import { ActionType, Action, State } from '../types/stateType';
import { Task } from '../types/taskType';

describe('todoReducer', () => {
  const task: Task = { name: 'new task', isDone: false };

  it('returns new state for "ADD" type', () => {
    const initialState: State = { tasks: [] };
    const updateAction: Action = {
      type: ActionType.ADD,
      payload: task,
    };
    const updatedState = todoReducer(initialState, updateAction);
    expect(updatedState).toEqual({
      tasks: [task],
    });
  });

  it('returns new state for "REMOVE" type', () => {
    const initialState: State = { tasks: [task] };
    const updateAction: Action = { type: ActionType.REMOVE, payload: task };
    const updatedState = todoReducer(initialState, updateAction);
    expect(updatedState).toEqual({ tasks: [] });
  });

  it('returns new state for "TOGGLE" type', () => {
    const initialState: State = { tasks: [task] };
    const updateAction: Action = { type: ActionType.TOGGLE, payload: task };
    const updatedState = todoReducer(initialState, updateAction);
    expect(updatedState).toEqual({
      tasks: [{ name: 'new task', isDone: true }],
    });
  });
});
