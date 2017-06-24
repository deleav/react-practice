import React, { Component } from 'react';

export default class GridSM extends Component {
  render() {
    return (
      <div>
        { window.matchMedia( this.props.mdq ).matches ? 'Hi' : '' }
      </div>
    )
  }
}