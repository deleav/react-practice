import React, { Component } from 'react';

// components
import GridSM from '../components/MediaQuery/GridSM';

export default class MediaQueryApp extends Component {
  constructor() {
    super();
    this.state = {
      sm: '(min-width: 768px)'
    }
  }

  render() {
    return (
      <div>
        <GridSM mdq={ this.state.sm } />
      </div>
    )
  }
}