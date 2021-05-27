import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

// useSelector 대신 mock 사용
jest.mock('react-redux');

test('App', () => {
  // TODO : useSelecto r 조작
  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
    tasks: [
      { id: 1, title: '아무 것도 하지 않기 #1' },
      { id: 2, title: '아무 것도 하지 않기 #2' },
    ],
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
});
