import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('creates new state and changes new task title', () => {
      const initialState = {
        taskTitle: '',
        tasks: [],
      };

      const state = reducer(initialState, updateTaskTitle('뭐라도 하기'));

      expect(state.taskTitle).toBe('뭐라도 하기');
    });
  });

  describe('addTask', () => {
    context('with new task title', () => {
      it('adds tasks into new task', () => {
        const setState = {
          taskTitle: '뭐라도 하기',
          tasks: [],
        };

        const state = reducer(setState, addTask());

        expect(state.tasks[0].title).toBe('뭐라도 하기');
      });
    });

    context('without new task title', () => {
      it('no changes', () => {
        const setState = {
          taskTitle: '',
          tasks: [],
        };

        const state = reducer(setState, addTask());

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with task id', () => {
      it('deletes tasks', () => {
        const previouState = {
          tasks: [{ id: 1, title: '뭐라도 하기' }],
        };

        const state = reducer(previouState, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without task id', () => {
      it('no changes', () => {
        const previouState = {
          tasks: [],
        };

        const state = reducer(previouState, deleteTask());

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('no action type', () => {
    it('returns previouState', () => {
      const previouState = {
        taskTitle: '',
        tasks: [],
      };
      const action = {};

      const state = reducer(previouState, action);

      expect(state.taskTitle).toBe('');
    });

    it('returns initialState without state', () => {
      const state = reducer();

      expect(state.taskTitle).toBe('');
    });
  });
});
