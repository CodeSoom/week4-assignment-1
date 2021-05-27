import { render, fireEvent } from '@testing-library/react';

import List from './List';

// test('테스트 #1')
//
// describe - it => describe('List) => it('renders tasks')
// describe - context - it
// jest-Plugins => jest-plugin-context  를 활용해야함
// with tasks
// - List renders tasks...
// - List renders "완료" button to delete a task
// without tasks
// - List renders no tasks message.
// TDD cycle : Red- Green - Refactoring

describe('List', () => {
  const handleClick = jest.fn();

  function renderList(tasks) {
    return render((
      <List
        tasks={tasks}
        onClickDelete={handleClick}
      />
    ));
  }

  context('with tasks', () => {
    const tasks = [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ];

    it('renders tasks', () => {
      const { getByText } = renderList(tasks);

      // 1. task가 추가된다.
      expect(getByText(/Task-1/)).not.toBeNull();
      expect(getByText(/Task-2/)).not.toBeNull();

      // 2.완료 버튼을 눌렀을 떄
      // 실제 onClickDelete 동작은 상위 컴포넌트에서 동작하는 것
      // List 컴포넌트에서는 onClickDelete 가 호출될 뿐이다.
    });

    it('renders "완료" button to delete a task ', () => {
      const { getAllByText } = renderList(tasks);
      const buttons = getAllByText('완료');

      fireEvent.click(buttons[0]);
      expect(handleClick).toBeCalledWith(1);
    });
  });

  context('without tasks', () => {
    it('List renders no tasks message', () => {
      const tasks = [];
      const { getByText } = renderList(tasks);

      expect(getByText(/할 일이 없어요/)).not.toBeNull();
    });
  });
});
