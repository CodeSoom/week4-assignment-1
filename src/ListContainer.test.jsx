import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

jest.mock('react-redux');

test('ListContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: 'task-1' },
      { id: 2, title: 'task-2' },
    ],
  }));
  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/task-1/)).not.toBeNull();
  expect(getByText(/task-2/)).not.toBeNull();

  fireEvent.click(getByText(/완료/));

  expect(dispatch).toBeCalledWith({
    type: 'deleteTask',
    payload: {
      id: 1,
    },
  });
});
