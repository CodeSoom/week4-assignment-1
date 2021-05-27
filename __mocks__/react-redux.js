export const useDispatch = jest.fn();

// selector를 받아서 seletor를 실행하는 역할
export const useSelector = jest.fn((selector) => selector({
  task: [
    { id: 1, title: '이무 것도 하지 않기 #1' },
    { id: 2, title: '이무 것도 하지 않기 #2' },
  ],
}));
