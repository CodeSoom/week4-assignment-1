import React from 'react';

import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './App';

import store from './store';

// store를 가볍게 쓸수 있도록 provider를 잡아준다?
// Provider 는 store를 전달
ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('app'),
);
