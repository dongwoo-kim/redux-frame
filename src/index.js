import React from 'react';
import ReactDom from 'react-dom';
import App from './component/App';
import store from './store';

console.log(store.getState());

// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Hello'
// });
//
console.log(store.getState());

ReactDom.render(
  <App />,
  document.querySelector('#app')
);
