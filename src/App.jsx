import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';

/* 목표 : hook을 제거하고, redux를 사용하라.

할 일 순 서
1. 리덕스 설치
2. handleChangeTitle을 리팩토링 하기 -> redux객체에 저장하고 불러오기.

리덕스 객체를 저장하고 사용하려면 어떻게 하지?
(1) store를 작성하고, index.jsx 에서 사용할 것을 선언하기.
(2) reducer를 작성하기. (계획하기)
(3) taskTitle을 재 정의 하기 = redux로부터 useSelector를 통해 값 얻기.

3. addTask 리팩토링하기
4. deleteTask 리팩토링하기
5. action파일 분리하기
6. reducer파일 분리하기
*/

export default function App() {
  const { taskTitle, tasks } = useSelector((reduxState) => ({
    taskTitle: reduxState.taskTitle,
    tasks: reduxState.tasks,
  }));

  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    const input = event.target.value;
    dispatch({
      type: 'updateTaskTitle',
      payload: {
        taskTitle: input,
      },
    });
  }

  function handleClickAddTask() {
    dispatch({
      type: 'addTask',
    });
  }

  function handleClickDeleteTask(id) {
    dispatch({
      type: 'deleteTask',
      payload: {
        id,
      },
    });
  }

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
