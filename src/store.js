import {createStore} from 'redux';

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.payload.text]);
    default:
      return state;
  }
}

const store = createStore(todos);

window.store = store;

console.log('store', store);

export default store;

export const dispatch = (type, payload) => {
  store.dispatch({type, payload});
}
