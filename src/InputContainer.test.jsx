import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  // TODO : useSelecto r 조작
  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Tilte',
  }));

  const { getByLabelText, getByText, getByDisplayValue } = render((
    <InputContainer />
  ));

  fireEvent.change(getByLabelText('할 일'), {
    target: { value: 'ChangeTitle' },
  });

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByDisplayValue(/New Tilte/)).not.toBeNull();

  fireEvent.click(getByText(/추가/));
});
