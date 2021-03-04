import { fireEvent, render, cleanup } from '@testing-library/react';
import EditTaskForm from './EditTaskForm';

describe('<EditTaskForm />', () => {
  afterEach(cleanup);

  it('should render right input value', () => {
    const mockTask = {
      id: '1',
      name: 'mock task',
      isDone: false,
    };

    const { container } = render(
      <EditTaskForm task={mockTask} setEditing={() => null} />
    );

    expect(container.querySelector('input')!.getAttribute('value')).toEqual(
      'mock task'
    );

    fireEvent.change(container.querySelector('input')!, {
      target: {
        value: '',
      },
    });
    expect(container.querySelector('input')!.getAttribute('value')).toEqual('');
  });
});
