import React from 'react';
import {dispatch} from '../store';

export default class Header extends React.PureComponent {
  onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      dispatch('ADD_TODO', {
        text: ev.target.value
      });
    }
  }

  render() {
    return (
      <input onKeyDown={this.onKeyDown} type="text" />
    )
  }
}
