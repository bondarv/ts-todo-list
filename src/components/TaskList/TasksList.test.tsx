import { cleanup, render } from '@testing-library/react';
import { ContextApp } from '../../App';
import TasksList from './TasksList';
import { State } from '../../types/stateType';

describe('<TasksList />', () => {
  afterEach(cleanup);

  const testState: State = {
    tasks: [
      { id: '1', name: 'test', isDone: false },
      { id: '2', name: 'test2', isDone: false },
    ],
  };

  const Wrapper = () => (
    <ContextApp.Provider value={{ state: testState, dispatch: () => null }}>
      <TasksList setEditing={() => null} setCurrentTask={() => null} />
    </ContextApp.Provider>
  );

  it('should render right tasks length', () => {
    const { container } = render(<Wrapper />);

    expect(container.querySelectorAll('li')).toHaveLength(
      testState.tasks.length
    );
  });
});
