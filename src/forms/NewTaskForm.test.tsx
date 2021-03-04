import { fireEvent, render, cleanup } from '@testing-library/react';
import NewTaskForm from './NewTaskForm';

describe('<NewTaskForm />', () => {
  afterEach(cleanup);

  it('should render right input value', () => {
    const { container } = render(<NewTaskForm />);

    expect(container.querySelector('input')!.getAttribute('value')).toEqual('');

    fireEvent.change(container.querySelector('input')!, {
      target: {
        value: 'test',
      },
    });
    expect(container.querySelector('input')!.getAttribute('value')).toEqual(
      'test'
    );

    fireEvent.click(container.querySelector('button')!);
    expect(container.querySelector('input')!.getAttribute('value')).toEqual('');
  });
});
