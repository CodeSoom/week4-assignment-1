import { createStore } from 'redux';

import reducer from './reducer';
// Redux action
// - type (String)
// - payload => object => { taskTitle }
// 리듀서는 상태와 액션을 받아서 만드는 함수모양

const store = createStore(reducer);

export default store;

//  리듀서는 상태를 다른 상태로 바꿔주는것( 이전상태가 되는 애들 => 리튜서 )
