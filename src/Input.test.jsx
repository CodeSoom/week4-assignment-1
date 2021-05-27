import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const onChange = jest.fn();
  const onClick = jest.fn();

  const { getByDisplayValue, getByLabelText, getByText } = render((
    <Input
      value="기존 할 일"
      onChange={onChange}
      onClick={onClick}
    />
  ));

  expect(getByDisplayValue('기존 할 일')).not.toBeNull();

  fireEvent.change(getByLabelText('할 일'), {
    target: { value: '뭐라도 하기' },
  });

  expect(onChange).toBeCalled();
  fireEvent.click(getByText('추가'));

  expect(onClick).toBeCalled();
});
