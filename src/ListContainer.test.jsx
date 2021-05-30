import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
// TODO : useSelector 조작
  const tasks = [
    { id: 1, title: '아무것도 하지않기 #1' },
    { id: 2, title: '아무것도 하지않기 #2' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  const { getByText } = render((
    <ListContainer />
  ));

  expect(getByText(/아무것도 하지않기 #1/)).not.toBeNull();

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
