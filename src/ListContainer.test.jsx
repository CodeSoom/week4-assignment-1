import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

import { deleteTask } from './actions';

jest.mock('react-redux');

describe('ListContainer', () => {
  it('tasks', () => {
    useSelector.mockImplementation((selector) => selector({
      tasks: [
        { id: 1, title: 'Task-1' },
        { id: 2, title: 'Task-2' },
      ],
    }));

    const { getByText } = render(<ListContainer />);

    expect(getByText(/Task-1/)).not.toBeNull();
  });

  it('renders handleClickDeleteTask', () => {
    const dispatch = jest.fn();
    useSelector.mockImplementation((selector) => selector({
      tasks: [
        { id: 1, title: 'Task-1' },
      ],
    }));

    useDispatch.mockImplementation(() => dispatch);

    const { getByText } = render(<ListContainer />);

    fireEvent.click(getByText('완료'));

    expect(dispatch).toBeCalledWith(deleteTask(1));
  });
});
