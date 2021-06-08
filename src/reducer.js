const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const reducers = {
  updateTaskTitle(state, action) {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  },

  addTask(state) {
    const { newId, taskTitle, tasks } = state;
    if (!taskTitle) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      tasks: [...tasks, { id: newId, title: taskTitle }],
      taskTitle: '',
    };
  },

  deleteTask(state, action) {
    const { tasks } = state;

    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action = { type: '' }) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
