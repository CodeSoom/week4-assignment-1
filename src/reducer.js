const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

// Redux action
// - type (String)
// - payload => object => { taskTitle }
// 리듀서는 상태와 액션을 받아서 만드는 함수모양

// state에 아무것도 없을 때 initialState가 들어옴.
export default function reducer(state = initialState, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }

  if (action.type === 'addTask') {
    const { newId, taskTitle, tasks } = state;

    if (!taskTitle) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  }

  if (action.type === 'deleteTask') {
    const { tasks } = state;
    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    };
  }

  return state;
}
