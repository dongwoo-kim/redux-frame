import React from 'react';
import Subscribe from '../frame/Subscribe';

export default class TodoList extends React.PureComponent {
  render() {
    return (
      <Subscribe selector={['todos']}>
        {todos => (
          <ul>
            {todos.map((todo, idx) =>
              <li key={idx}>{todo}</li>
            )}
          </ul>
        )}
      </Subscribe>
    )
  }
}
