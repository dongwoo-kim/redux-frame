import React from 'react';
import store from '../store';

export default class Subscribe extends React.PureComponent {
  constructor(props) {
    super(props);
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      this.props.children(store.getState())
    )
  }
}
