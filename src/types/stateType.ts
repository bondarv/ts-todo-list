import { Dispatch } from 'react';
import { Tasks, Task } from './taskType';

export interface State {
  tasks: Tasks;
}

// Все возможные варианты действий со стейтом
export enum ActionType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  TOGGLE = 'TOGGLE',
}

export interface Action {
  type: ActionType;
  payload: Task;
}

// Наш контекст состоит из стейта и функции-редьюсера, в которую будут передаваться Action. Тип Dispatch импортируется из библиотеки react
export interface ContextState {
  state: State;
  dispatch: Dispatch<Action>;
}
