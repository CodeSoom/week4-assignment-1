import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import Page from './Page';

jest.mock('react-redux');

test('Page', () => {
  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
    tasks: [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ],
  }));

  const { getByText } = render((
    <Page />
  ));

  expect(getByText(/Task-1/)).not.toBeNull();
  expect(getByText(/Task-2/)).not.toBeNull();
});
