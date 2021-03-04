import { Dispatch } from 'react';
import { Tasks, Task } from './taskType';

export interface State {
  tasks: Tasks;
}

export enum ActionType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  TOGGLE = 'TOGGLE',
}

export interface Action {
  type: ActionType;
  payload: Task;
}

export interface ContextState {
  state: State;
  dispatch: Dispatch<Action>;
}
