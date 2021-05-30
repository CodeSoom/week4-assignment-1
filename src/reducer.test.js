import reducer from './reducer';

// npx jest --watchAll --verbose

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns new state with new task title', () => {
      // const previousState = {
      //     taskTitle: '123',
      // }

      // const action = {
      //     type: 'updateTaskTitle',
      //     payload: {
      //         taskTitle: 'NewTitle',
      //     },
      // };

      const state = reducer({
        taskTitle: '123',
      }, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    function reduceAddTask(taskTitle) {
      return reducer({
        newId: 100,
        taskTitle,
        tasks: [],
      }, addTask());
    }

    context('with task title', () => {
      it('appends a new task into tasks', () => {
        const state = reduceAddTask('New Task');

        expect(state.tasks[0].title).toBe('New Task');
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks).toHaveLength(1);
      });

      it('clear task title', () => {
        // const state = reducer({
        //     newId:100,
        //     taskTitle: 'New Task',
        //     tasks: [],
        // }, addTask());

        const state = reduceAddTask('New Task');

        expect(state.taskTitle).toBe('');
        expect(state.tasks[0].title).toBe('New Task');
      });
    });
    context('without tasktitle', () => {
      it("it doesn't work", () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with existed task ID', () => {
      it('remove the task from tasks', () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'Task ' },
          ],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without  existed task ID', () => {
      it("it doesn't work", () => {
        const state = reducer({
          tasks: [
            { id: 1, title: 'Task ' },
          ],
        }, deleteTask(500));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
