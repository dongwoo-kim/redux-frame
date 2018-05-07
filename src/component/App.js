import React from 'react';
import Header from './Header';
import TodoList from './TodoList';

export default class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
        <TodoList />
      </React.Fragment>
    );
  }
}
